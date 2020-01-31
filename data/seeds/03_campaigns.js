
exports.seed = async function(knex) {
  await knex('campaigns').insert([
    { title: "Support The River Otters", description: "Highly valued for their pelts", urgency_level: "Critical", location: "Indiana" },
    { title: "Seahorses Unite!", description: "High demand for traditional Chinese medicine market and aquarium trade", urgency_level: "Critical", location: "South Africa" },
    { title: "Save The Creeps", description: "Highly sought by insect collectors for exotic pet trade", urgency_level: "Critical", location: "Sri Lanka" },
    { title: "Save The Koala's", description: "Raging fires that are still buring", urgency_level: "Critical", location: "Australia" },
  ])
};