import { API_URL } from '../../../config/index';

export default async (req, res) => {
    const token = req.body;

    try {
        const apiRes = await fetch(`${API_URL}/api/account/test`, {
            method: "GET",  
            headers: {
                token
            }
        });

        const data = await apiRes.json();
        console.log(data)
        console.log(res)
       
    } catch(err) {
        return res.status(500).json({
            error: 'Something went wrong when testing'
        });
    }
};