exports.handler = async (event) => {
  try {
    const { email } = JSON.parse(event.body);

    const apiKey = 'fd_key_bd51265ff865499d8b15797b52fc2e1e.E1SysHzaHzvW7puFGmywPv9B6EaB4sUF9gPmGH2ISdxKf1syfPoyxciih2kr1ZOAlIP0nv3aJ2sxeFt3xRISgyfpS8AC1EZbfQxnHyQVfZMxVEudEZUp90KkwBHYCQWr4Lpe2PLHuH0PRPyEl3d3ZTOs056EXoXrpPHtzUrJWBOqIbcSD8ffzMNvaKWoNGEv';
    
    const response = await fetch('https://api.flodesk.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(apiKey + ':').toString('base64')
      },
      body: JSON.stringify({
        email,
        segments: [{ id: '69a47ff7b7ecbac76b2582db' }]
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };
  } catch(err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false })
    };
  }
};