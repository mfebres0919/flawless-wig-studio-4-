exports.handler = async (event) => {
  try {
    const { email } = JSON.parse(event.body);
    const apiKey = 'fd_key_bd51265ff865499d8b15797b52fc2e1e.E1SysHzaHzvW7puFGmywPv9B6EaB4sUF9gPmGH2ISdxKf1syfPoyxciih2kr1ZOAlIP0nv3aJ2sxeFt3xRISgyfpS8AC1EZbfQxnHyQVfZMxVEudEZUp90KkwBHYCQWr4Lpe2PLHuH0PRPyEl3d3ZTOs056EXoXrpPHtzUrJWBOqIbcSD8ffzMNvaKWoNGEv';
    const auth = 'Basic ' + Buffer.from(apiKey + ':').toString('base64');

    // Step 1: Create subscriber
    const createRes = await fetch('https://api.flodesk.com/v1/subscribers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': auth },
      body: JSON.stringify({ email })
    });
    const createData = await createRes.json();
    console.log('Create subscriber:', JSON.stringify(createData));

    // Step 2: Add to segment (email must not be encoded)
    const segRes = await fetch('https://api.flodesk.com/v1/subscribers/' + email + '/segments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': auth },
      body: JSON.stringify({ segment_ids: ['69a48f6febf332bb71733711'] })
    });
    const segData = await segRes.json();
    console.log('Add to segment:', JSON.stringify(segData));

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch(err) {
    console.log('Error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
};