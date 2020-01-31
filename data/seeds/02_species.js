
exports.seed = async function(knex) {
  await knex('species').insert([
    { animal: "river otter", org_id: 1 }, // 1
    { animal: "polar bear", org_id: 1 },
    { animal: "red panda", org_id: 1 },
    { animal: "seahorse", org_id: 2 }, // 4
    { animal: "sea turtle", org_id: 2 },
    { animal: "sea otter", org_id: 2 },
    { animal: "dugong", org_id: 2 },
    { animal: "koala", org_id: 3 }, // 8
    { animal: "bilbies", org_id: 3 },
    { animal: "tarantula", org_id: 4 },
    { animal: "mouse lemur", org_id: 4 }, // 10
    { animal: "orangutan", org_id: 4 },
    { animal: "snow leopard", org_id: 4 }, // 12
  ])
};
