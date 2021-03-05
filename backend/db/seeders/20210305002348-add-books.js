'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
    {
      title: 'Inside of a Dog: What Dogs See, Smell, and Know',
      description: `The bestselling book that asks what dogs know and how they think. The answers will surprise and delight you as Alexandra Horowitz, a cognitive scientist, explains how dogs perceive their daily worlds, each other, and that other quirky animal, the human.

      Temple Grandin meets Stephen Pinker in this engaging and informative look at what goes on inside the minds of dogs—from a cognitive scientist with a background at The New Yorker.
      
      With more than 52 million pet dogs in America today, it’s clear we are a nation of unabashed dog-lovers. Yet the relationship between dogs and humans remains a fascinating mystery, as no one really knows what goes on in the canine mind. Now, in Inside of a Dog, Alexandra Horowitz fuses her perspectives as both scientist and dog-owner to deliver a fresh look at the world of dogs—as seen from the animal’s point of view. Inspired by her years of living with her own dog, Pumpernickel, who was a constant source of delight and mystery, Horowitz’s mind became filled with questions and ideas. In crisp, clear prose, she draws on her research in the field of dog cognition to give readers a sense of a dog’s perceptual and cognitive abilities—and paints a picture of what the canine experience is like. Horowitz’s own scientific journey, and the insights she uncovered, allowed her to understand her dog better and appreciate her more.
      
      Containing up-to-the minute research and providing many moments of dog-behavior recognition, this lively and absorbing book helps dog owners to see their best friend’s behavior in a different, and revealing light, allowing them to understand their pets and enjoy their company even more.`,
      pageCount: 353,
      authorId: 1,
      publisher: 'Scribner',
      publishDate: "2009-09-15",
      speciesId: 1,
      bookCover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347980799l/6332526.jpg",
    },
    {
      title: "The Ultimate Guide to Cat Psychology, Behaviour, and Communication",
      description: `-Do cats feel love and other “human” emotions?
      -Are male or female cats more affectionate?
      -How can you encourage an aloof cat to be more affectionate?
      -Are cats intelligent?
      -Which cat breeds are the most intelligent?
      -Which are smarter – cats or dogs?
      -Why do cats hiss?
      -Why do cats gravitate toward people who fear or dislike them?
      -Why do some cats attack when being petted?
      -Why do cats fight?
      -How can you reduce aggression in cats?
      -How can you reduce dependence and separation anxiety in clingy cats?
      -Why do some cats become anxious or phobic?
      -What do various cat vocalizations mean?
      -What is a cat saying with her body language?
      -Why do cats rub against things?
      -Do cats sulk?
      -Why do some cats howl, especially at night?
      -Why do some cats suck on fabric, wool, or hair?
      -Why do cats go crazy for catnip, mint, and valerian?
      -Can cats become addicted to catnip?
      -Why do some cats like shoes, socks, or feet?
      -Why do some cats love bleach or chlorine?
      -Why do some cats and kittens eat kitty litter?
      -Why do some cats eat soap?
      -Why do cats lick photographs or eat plastic?
      -How can you stop a cat from eating inappropriate items?
      -Why do cats eat grass or houseplants?
      -Why do cats play with their prey?
      -Why do cats bring home live prey?
      -Why do cats prefer drinking dirty water to fresh tap water?
      -Why will a cat suddenly stop eating?
      -Why do some cats suddenly develop voracious appetites?
      -Why do some cats drink so much and pee so often?
      -Why do some cats play with water?
      -Why do some cats pull out their fur?
      -Why do cats chew on their claws?
      -Why do cats have accidents outside the litter box (and how can you prevent them)?
      -Why do cats scratch furniture and carpets (and how do you stop them from doing this)?
      -Can declawing cats trigger behaviour problems?
      -How should you introduce a new dog to your cat?
      -Which dog breeds get along best with cats?
      -Can cats and dogs be friends?
      -Which cat breeds get along best with dogs?
      -How do you stop a cat from attacking a dog?
      -How do you stop a dog from attacking a cat?
      -Why do cats sometimes appear to be grimacing with their mouths open?
      -Why do cats knead or paddle with their paws?
      -Why do cats make chattering sounds when they see birds through a window?
      -Why do cats make sudden mad dashes around the house?
      -Why does a tom cat bite a female’s neck while mating?
      -Why do cats roll on their backs to greet people?
      -Will tom cats kill kittens?
      -Does spaying or neutering affect a cat’s behaviour and personality?
      -Will handling newborn kittens cause their mother to reject them?
      -Why do mother cats move kittens?
      -Do cats like music?
      -Why do cats purr?
      -How can you encourage a new cat and resident cat to get along?
      -Can indoor cats be happy?`,
      pageCount: 223,
      authorId: 2,
      publisher: 'N/A',
      publishDate: "2014-04-08",
      speciesId: 2,
      bookCover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439665796l/26105736._SX318_.jpg",
    },
    {
      title: "Harry the Dirty Dog",
      description: `There's never been another dog as delightful–or dirty–as Harry.

      This lovable white dog with black spots (or black dog with white spots) has charmed children for fifty years, and we are celebrating with an anniversary edition. This childhood favourite is perfect for reading aloud before going to bed or avoiding a bath.`,
      pageCount: 32,
      authorId: 3,
      publisher: 'HarperCollins',
      publishDate: "2006-01-24",
      speciesId: 1,
      bookCover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348901453l/857448.jpg",
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});

  }
};
