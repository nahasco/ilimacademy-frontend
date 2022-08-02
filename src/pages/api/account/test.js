import { API_URL } from '../../../config/index';

export default async (req, res) => {
    const body = req.body;

    try {
        const apiRes = await fetch(`${API_URL}/api/account/test`, {
            body: body
        });

        const data = await apiRes.json();

       console.log(res)
       
    } catch(err) {
        return res.status(500).json({
            error: 'Something went wrong when testing'
        });
    }
};