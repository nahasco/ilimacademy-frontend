import { API_URL } from '../../../config/index';

export default async (req, res) => {
    if (req.method === 'POST') {
        body = JSON.stringify(req.body);
        try {
            const apiRes = await fetch(`${API_URL}/api/account/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            const data = await apiRes.json();

            if (apiRes.status === 201) {
                return res.status(201).json({ success: data.success });
            } else {
                return res.status(apiRes.status).json({
                    error: data.error
                });
            }
        } catch(err) {
            return res.status(500).json({
                error: 'Something went wrong when registering for an account'
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ 'error': `Method ${req.method} not allowed`});
    }
};