# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

garbo = User.create!(
  name: "Garbo Cheng",
  password: "123456",
  email: "garbocheng93@gmail.com",
  user_catchphrase: "If you like to play basketball with a team player, I'm your guy!",
  user_description: "I am an ABCD looking to have fun playing basketball."
)

lebron = User.create!(
  name: "Lebron James",
  password: "123456",
  email: "lebronjames@gmail.com",
  user_catchphrase: "Have you ever wondered what's it like to play basketball with a king?",
  user_description: "Ended Cleveland's 52 years championship drought. Ending Lakers 5 years playoff drought."
)

roger = User.create!(
  name: "Roger Federer",
  password: "123456",
  email: "rogerfederer@yahoo.com",
  user_catchphrase: "Tick Tock Tick Tock, time is running and so is your chance to play with a legend.",
  user_description: "When you think of tennis, you think of me."
)

serena = User.create!(
  name: "Serena Williams",
  password: "123456",
  email: "serenawilliams@hotmail.com",
  user_catchphrase: "You like watching me play on TV? Would you like to play against me?",
  user_description: "The queen of tennis."
)