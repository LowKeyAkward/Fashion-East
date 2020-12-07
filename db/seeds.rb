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

@admin = User.create(username: 'admin', email: 'admin@email.com', password:'123456')

puts "#{User.count} users created"

@post1 = Post.create(
  title: 'Cool Girl',
  image: 'https://www.imagup.com/wp-content/uploads/2020/02/Korean-Fashion-2.jpg', 
  content: 'Look at my shirt, my shirt is amazing', 
  price:'50', 
  tags:'Edgy',
  outfit:'Gucci Shirt', 
  user: @admin,
  category: "Korean"
)

@post2 = Post.create(
  title: 'Scarfs Up',
  image: 'https://i.pinimg.com/originals/15/85/ba/1585bacd1d497ddc60f9918b35295d93.jpg', 
  content: 'Dont my scarf and coat look perfect together?', 
  price:'250', 
  tags:'Trending',
  outfit:'Comfy Scarf', 
  user: @admin,
  category: "Korean"
)

@post3 = Post.create(
  title: 'Keep It Casual',
  image: 'https://i.pinimg.com/originals/8b/db/dc/8bdbdcebcc302221e19c3b26a8785fcc.jpg', 
  content: 'You dont need to try too hard, to look really good', 
  price:'250', 
  tags:'Trending',
  outfit:'Red Puff', 
  user: @admin,
  category: "Korean"
)

@post4 = Post.create(
  title: 'Singing In The Rain',
  image: 'https://i.pinimg.com/originals/8c/9a/92/8c9a92130b0bcd9e9eb0df8750fe66e9.jpg', 
  content: 'Not even the rain can stop my good looks', 
  price:'250', 
  tags:'Trending',
  outfit:'Furcoat', 
  user: @admin,
  category: "Korean"
)

@post5 = Post.create(
  title: 'Buisness Casual',
  image: 'https://i.pinimg.com/564x/24/29/28/2429280661dc9b0c5c49a95fea3d2a00.jpg', 
  content: 'Felt pretty this morning before going to work, might delete later', 
  price:'150', 
  tags:'Casual',
  outfit:'Buisness Casual', 
  user: @admin,
  category: "Korean"
)

@post6 = Post.create(
  title: 'Nothing Beats a peacoat',
  image: 'https://i.pinimg.com/originals/c4/1c/34/c41c34ad57c4d526e5099eff3d594eb9.jpg', 
  content: 'Nothing speaks put together more than a peacoat', 
  price:'350', 
  tags:'Fancy',
  outfit:'Peacoat', 
  user: @admin,
  category: "Korean"
)

@post7 = Post.create(
  title: 'I really dont wanna go to class',
  image: 'https://pipiluxury.com/wp-content/uploads/2020/03/2020-Summer-new-women-s-Korean-fashion-Medium-and-long-cotton-shirt-student-wild-print-shirt-2.jpg', 
  content: 'I literally just woke up like this, what do you want from me?', 
  price:'50', 
  tags:'Sleepy',
  outfit:'Wake Up', 
  user: @admin,
  category: "Korean"
)

@post8 = Post.create(
  title: 'What are you looking at?',
  image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/03/09/81fcc222-5ddf-11ea-be3e-43af5536d789_image_hires_103410.jpg', 
  content: 'You think you got anything on me? I make anything look good', 
  price:'150', 
  tags:'Confident',
  outfit:'Twead coat', 
  user: @admin,
  category: "Korean"
)

@post9 = Post.create(
  title: 'Cant wait for spring',
  image: 'https://i0.wp.com/rohayati.com/wp-content/uploads/2020/02/Korean-Men-Style.jpg?resize=683%2C1024', 
  content: 'Throw back to spring, when I could wear this and actually go outside', 
  price:'150', 
  tags:'Outdoors',
  outfit:'Spring flare', 
  user: @admin,
  category: "Korean"
)

@post10 = Post.create(
  title: 'Going out for dinner',
  image: 'https://fleepmart.com/wp-content/uploads/2020/01/0-c0ab82.jpeg', 
  content: 'Getting ready to go out for dinner tonight, how do I look?', 
  price:'350', 
  tags:'Dinner',
  outfit:'Fine Dining', 
  user: @admin,
  category: "Korean"
)

puts "#{Post.count} posts created"

@comment1 = Comment.create(content:'dang i love myself', user: @admin, post: @post1)
@comment2 = Comment.create(content:'Cant stop myself from coming back', user: @admin, post: @post1)
@comment3 = Comment.create(content:'What a queen', user: @admin, post: @post1)
@comment4 = Comment.create(content:'I love it', user: @admin, post: @post2)
@comment4 = Comment.create(content:'A true goddess', user: @admin, post: @post2)
@comment5 = Comment.create(content:'Thank you for the inspiration', user: @admin, post: @post2)
@comment6 = Comment.create(content:'What the heck?', user: @admin, post: @post2)
@comment7 = Comment.create(content:'I love it', user: @admin, post: @post3)
@comment8 = Comment.create(content:'Dude you look dope', user: @admin, post: @post3)
@comment9 = Comment.create(content:'How do i afford this?', user: @admin, post: @post3)
@comment10 = Comment.create(content:'You make anything look good', user: @admin, post: @post4)
@comment11 = Comment.create(content:'I wish I looked like you', user: @admin, post: @post4)
@comment12 = Comment.create(content:'How are you so perfect?', user: @admin, post: @post4)
@comment13 = Comment.create(content:'Must be photoshopped', user: @admin, post: @post4)
@comment14 = Comment.create(content:'Aww so cute', user: @admin, post: @post5)
@comment15 = Comment.create(content:'Where did you buy this?', user: @admin, post: @post5)
@comment16 = Comment.create(content:'omg, WOW', user: @admin, post: @post6)
@comment17 = Comment.create(content:'Thank you for the help', user: @admin, post: @post7)

puts "#{Comment.count} comments created"
