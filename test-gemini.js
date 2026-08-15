const API_KEY = 'AIzaSyDcpktkyyvdrvhYQOwl--wArB0YY8LKbGI';
const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const MODELS = ['gemini-2.0-flash-lite', 'gemini-2.0-flash'];

(async () => {
    for (const model of MODELS) {
        console.log('Testing', model);
        const res = await fetch(`${API_BASE}/${model}:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{role: 'user', parts: [{text: 'hello'}]}]
            })
        });
        console.log(res.status);
        console.log(await res.text());
    }
})();
