const axios = require('axios');
const baseUrl = "https://icomox.poc.icomoxlive.net/rest";

const getAllTickets = async (req, res, next) => {
    const config = {
        method: 'get',
        url: `${baseUrl}/ticket`,
        headers: { 
          'Authorization': `Bearer ${req.params.token}`, 
        }
      };    
      axios(config)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}

const getOpenTickets = async (req, res, next) => {
  const config = {
      method: 'get',
      url: `${baseUrl}/ticket/opened`,
      headers: { 
        'Authorization': `Bearer ${req.params.token}`, 
      }
    };    
    axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = {
    getAllTickets: getAllTickets,
    getOpenTickets: getOpenTickets,
};