# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password:'123456')

puts "#{User.count} users created"

@post1 = Post.create!(
  title: 'Cool Girl',
  image: 'https://www.imagup.com/wp-content/uploads/2020/02/Korean-Fashion-2.jpg', 
  content: 'Look at my shirt, my shirt is amazing', 
  price:'50', 
  tags:'Edgy',
  outfit:'Gucci Shirt', 
  user: @admin,
  category: "Korean"
)

@post2 = Post.create!(
  title: 'Scarfs Up',
  image: 'https://i.pinimg.com/originals/15/85/ba/1585bacd1d497ddc60f9918b35295d93.jpg', 
  content: 'Dont my scarf and coat look perfect together?', 
  price:'250', 
  tags:'Trending',
  outfit:'Comfy Scarf', 
  user: @admin,
  category: "Korean"
)

@post3 = Post.create!(
  title: 'Keep It Casual',
  image: 'https://i.pinimg.com/originals/8b/db/dc/8bdbdcebcc302221e19c3b26a8785fcc.jpg', 
  content: 'You dont need to try too hard, to look really good', 
  price:'250', 
  tags:'Trending',
  outfit:'Red Puff', 
  user: @admin,
  category: "Korean"
)

@post4 = Post.create!(
  title: 'Singing In The Rain',
  image: 'https://i.pinimg.com/originals/8c/9a/92/8c9a92130b0bcd9e9eb0df8750fe66e9.jpg', 
  content: 'Not even the rain can stop my good looks', 
  price:'250', 
  tags:'Trending',
  outfit:'Furcoat', 
  user: @admin,
  category: "Korean"
)

puts "#{Post.count} posts created"

@comment1 = Comment.create!(content:'dang i love myself', user: @admin, post: @post1)
@comment2 = Comment.create!(content:'Cant stop myself from coming back', user: @admin, post: @post1)

puts "#{Comment.count} comments created"
