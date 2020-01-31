
exports.seed = async function(knex) {
  await knex('species').insert([
    { name: "river otter", org_id: 1 }, // 1
    { name: "polar bear", org_id: 1 },
    { name: "red panda", org_id: 1 },
    { name: "seahorse", org_id: 2 }, // 4
    { name: "sea turtle", org_id: 2 },
    { name: "sea otter", org_id: 2 },
    { name: "dugong", org_id: 2 },
    { name: "koala", org_id: 3 }, // 8
    { name: "bilbies", org_id: 3 },
    { name: "tarantula", org_id: 4 },
    { name: "mouse lemur", org_id: 4 }, // 10
    { name: "orangutan", org_id: 4 },
    { name: "snow leopard", org_id: 4 }, // 12
  ])
};
