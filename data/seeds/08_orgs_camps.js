
exports.seed = async function(knex) {
  await knex('orgs_camps').insert([
    { campaign_id: 1, org_id: 1, deadline: '2025-05-19', fund_goal: 15000, completed: false },
    { campaign_id: 2, org_id: 2,  deadline: '2025-10-06', fund_goal: 25000, completed: false },
    { campaign_id: 3, org_id: 4,  deadline: '2022-01-25', fund_goal: 10000, completed: false },
    { campaign_id: 4, org_id: 3,  deadline: '2030-08-15', fund_goal: 100000, completed: false },
  ])
};
