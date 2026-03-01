const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { email } = JSON.parse(event.body);

  const response = await fetch('https://api.flodesk.com/v1/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from('fd_key_bd51265ff865499d8b15797b52fc2e1e.E1SysHzaHzvW7puFGmywPv9B6EaB4sUF9gPmGH2ISdxKf1syfPoyxciih2kr1ZOAlIP0nv3aJ2sxeFt3xRISgyfpS8AC1EZbfQxnHyQVfZMxVEudEZUp90KkwBHYCQWr4Lpe2PLHuH0PRPyEl3d3ZTOs056EXoXrpPHtzUrJWBOqIbcSD8ffzMNvaKWoNGEv:').toString('base64')
    },
    body: JSON.stringify({
      email,
      segments: [{ id: '69a47ff7b7ecbac76b2582db' }]
    })
  });

  return {
    statusCode: response.status,
    body: JSON.stringify({ ok: response.ok })
  };
};