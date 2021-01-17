const axios = require('axios');
const baseUrl = "https://icomox.poc.icomoxlive.net/rest";
const severity_level_enum = {
  "0":"normal_operation",
  "1":"medium_level_alerts",
  "2":"high_level_alerts"
}
const filterTickets = (tickets) => {
  let filtered_tickets = {
    "normal_operation":[],
    "medium_level_alerts":[],
    "high_level_alerts":[],
  };
  tickets.map(ticket => {
    let severity = severity_level_enum[ticket.alertLevel];
    filtered_tickets[severity].push(ticket);
  })
  return filtered_tickets;
}

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
       res.json(filterTickets(response.data));
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
      res.json(filterTickets(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = {
    getAllTickets: getAllTickets,
    getOpenTickets: getOpenTickets,
};