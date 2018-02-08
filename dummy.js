const User = require('./models/user');
const Post = require('./models/post');

const me = User.build({
  firstName: 'Rich',
  lastName: 'Reneau'
});
let p;
p = Post.build(
  {
    title: "Distant Earth-like planets could harbor water — and maybe life",
    content: "Several planets in a distant solar system have temperatures that could sustain liquid water, thought to be a key for life, a series of studies released Monday report."
  },
);
p.setUser(me);
p.save();

p = Post.build(
  {
    title: "Bitcoin price drops below $8,000 for first time since November 24",
    content: "Multiple virtual currencies have dropped significantly as regulators voiced concerns about them and worries grew over suggestions that the price of bitcoin has been propped up by popular exchange Bitfinex."
  },
);
p.setUser(me);
p.save();

p = Post.build(
  {
    title: "Here's how Alicia Vikander gained 12 pounds (of muscle) for 'Tomb Raider'",
          content: "At first, the weight gain was jarring for Vikander, who’s always been lean, but Lygdback assured the actress that she’d achieve the right action-hero look."
  },
);
p.setUser(me);
p.save();

me.save();


// Post.create({
//   title: 'First post!',
//   content: 'It was the best of times, it was the worst of times'
// }).then(post => {
//   post.setUser(me);
//   // post.setComments([])
//   post.save();
// });

// me.save();


// User.findOne({
//   where: {
//     id: 1
//   }
// }).then(author => {
//   // now! create a post!
//   Post.create({
//     title: 'First post!',
//     content: 'It was the best of times, it was the worst of times'
//   }).then(post => {
//     post.setUser(author);
//     // post.setComments([])
//     post.save();
//   })


//   // Another way:
//   let anotherPost = Post.build({ title: 'tres', content: 'please work' });
//   anotherPost.setUser(author);

// })



