import { error } from 'console'
import fetch from 'node-fetch'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'method not allowed' })
    }

    const webhookUrl = process.env.Discord_WEBHOOK_URL
    const { message, username } = req.body || {}

    const payload = {
        content: message || 'no message provided',
        username: username || 'anonymous',
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        if (!response.ok) throw new Error('Discord API erorr')
        return res.status(200).json({ success: true })
    } catch (erorr) {
        return res.status(500).json({ success: false, erorr: error.message })
    }
}