// api/projects/chat.js
// GET /api/projects/chat?project_id=xx
// 기존 대화 내역 + goal 조회

import { createClient } from '@supabase/supabase-js';
import { getUser } from '../../lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { project_id } = req.query;
  if (!project_id) return res.status(400).json({ error: 'project_id가 필요해요.' });

  try {
    await getUser(req);

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );

    // 대화 내역 조회
    const { data: chats, error: chatsError } = await supabase
      .from('ai_chats')
      .select('role, content')
      .eq('project_id', project_id)
      .order('created_at', { ascending: true });

    if (chatsError) throw chatsError;

    // goal 조회 (없을 수 있음)
    const { data: goal } = await supabase
      .from('goals')
      .select('id, title, description, features, status')
      .eq('project_id', project_id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    return res.status(200).json({
      chats: chats || [],
      goal: goal || null,
    });

  } catch (err) {
    console.error('project/chat error:', err);
    return res.status(500).json({ error: err.message || '불러오지 못했어요.' });
  }
}
