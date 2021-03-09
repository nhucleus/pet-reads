'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      bookId: 1,
      body: `Alexandra Horowitz racked up major brownie points right from the beginning with this book. The title comes from one of my favorite quotes ever, from the mouth of Groucho Marx. Also, early on she heads complaints off at the pass by stating that she is using "owner" rather than "pet parent" or some other such silly phrasing because that's the legal term, and she will use "him" and "his" when referring to dogs in general because that's the English default, and, knowing dogs as she does, "it" is not an option. That latter scored high with me: I have Issues with writers who use "it" for animals (particularly those who talk about a mare or stallion and then call the horse "it"), so this made me happy. She is a long-time dog person, so all else being equal we are kindred spirits.`,
      rating: 4,
    },
    {
      userId: 2,
      bookId: 1,
      body: `This is a lovely, unsentimental, fairly thorough, scientifically-grounded look at the dog-human bond: how it evolved, how the canine's sensory equipment shapes his (or her) world and relationship with us, and how a deeper understanding of that world - "the inside of a dog" (yes, from the Groucho Marx quotation) - should shape ours with them. Didn't so much change or illuminate, but anchored what I think I know about my dog and dogs in general in explanations of canine behaviour drawn from the author's own experiences and her background as a comparative psychologist.

      The dog-human bond is something very special to me -- having owned dogs all my life, and currently being on a full-on tear to work towards the overturning of BSL (breed specific legislation) in Ontario which is the product of and continues to cause such cruelty to dogs and their families.
      
      It's about more than treating other creatures with the respect they deserve; it's about how human beings can and should respectfully share the planet with other living things. That perspective in microcosm is taught, I believe, through the relationships parents encourage (or deny) when or if they bring that first puppy into the home.
      
      Teaching a child to treat a dog with gentleness, kindness and compassion is teaching a child to love. Teaching that lesson from the deeply-informed perspective that Horowitz provides here can only enrich the both the dog's life and the family's. One of the author's points is that dogs most often give us much more than we give them. Another is that the fundamental quality of the relationship between dogs and humans - that affection, that love - is beyond the reach of science. Maybe so, but anyone who has bonded with a dog knows it to be true.`,
      rating: 3,
    },
    {
      userId: 3,
      bookId: 1,
      body: `This book was a little disappointing for me. I wanted to get it as a Christmas present for some dog owner friends. Instead they are getting a bicycle pump. Although full of some interesting thoughts and research data, overall the book felt a bit dull, a bit lacking. It is neither practical enough to be an owner’s manual, nor detailed enough to satisfy my interest in the experiments behind the ideas. It seems to try to tread a middle road between pop and intellectual, and instead turned me off to both aspects.

      The premise of the book is good, and I like the idea of trying to see the world as your dog does to better understand. I was challenged by the idea that smell is the most important sense to the dog, not sight or hearing. And throughout the book there were other wonderful nuggets of information to chew on. But overall there was not enough to hold my interest. And by the last 100 pages I thought the book was dragging on.
      
      Tough to recommend though not a total waste.`,
      rating: 2,
    },
    {
      userId: 1,
      bookId: 3,
      body: `A wonderful story about a little dog that goes on an adventure and gets so dirty he looks completely different. The illustrations are beautiful and so full of humour. We read a couple of Harry books when my children were young but didn't have this one, we love the one we own and have read it again and again. Definitely one I would buy if I came across it. Thanks to goodreads friend Margie mentioning how wonderful these are I found this one and several others on open library.

      A great read for children who love dogs.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 3,
      body: `Harry was a lovely white dog who sported a few black spots. He loved life to the fullest, but could not handle baths whatsoever. After disposing of his scrubbing brush, Harry set out to explore the world on his own, a very dirty world. Playing in the dirt and rolling in coal soon turned Harry into the blackest dog ever, with only a few white spots. After missing his family, Harry decided to return home, though things were not as easy as he might have hoped! Neo has never had a pet, but he quite enjoyed this piece, noticing how determined Harry was to get out and see the world, but still chose to come home at the end of the day. `,
      rating: 4,
    },
    {
      userId: 2,
      bookId: 4,
      body: `This is the first book that has ever, and I emphasize EVER, made me laugh so hard and cry so much. All in one book!

      Marley & Me is the predictable and somewhat cliche story about a dog and his owner. If you pick up this book expecting a unique story, put it down and look for something else.
      
      If you pick up this book expecting to learn about how to train your dog, put it down and look for something else.
      
      If you pick up this book wanting to read a touching, but very entertaining story about being a dog owner, you've come to the right place.
      
      This book basically chronicles the Marley's life with the Grogan's from puppyhood to his last few breaths.
      
      Most of the negative reviews I've read about this book criticized the author's poor training methods. No one's perfect. And just like parents, dog owners can make mistakes too. Additionally, you can't celebrate life without understanding death, so to completely discredit this book because of Marley's inevitable end is to ignore one's own mortality.
      
      Overall this is a great book. You might not learn anything new (or for that matter, correct) about dog training, but you'll at least learn to appreciate the unconditional love and affection a canine companion can bring to one's life.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 4,
      body: `SO my mom sent me this book because she thought I was all down after a stupid break up, and she wanted to cheer me up. I wasn't really down. I was totally fucking pissed off. I went into reading this book seeing red. Maybe that's affected how I interpreted it, but I really think this John Grogan guy and his wife are complete idiots.

      There is no reason to ever buy a dog, ever. Ever. There are dogs dying all over the country because people abandon their animals or neglect to have them spayed/neutered, and these two roll up to a backyard breeder to pick out (and pay for) a puppy? Total bullshit. I am so against the mentality that a certain breed "has the traits" someone is looking for or is the kind of dog they grew up with and have fond memories of, and therefore has to be bred, sold and paid for. Go through a rescue group if you INSIST on being a breedist.
      
      Also? There are no bad dogs, only bad dog owners. World's worst dog? World's worst dog owners.
      
      That being said, I don't think these two abused their dog or anything. They were completely unprepared, ignorant and arrogant and I can not respect that at all. If they weren't sure about having a dog and wanted to practice "keeping something alive" they should have fostered. At least then they could have either backed out or adopted, and had help/advice along the way.
      
      I didn't totally hate it, though. I am just awfully adamant about animal rights, and buying/selling dogs is pretty much similar to buying/selling people to me.`,
      rating: 1,
    },
    {
      userId: 1,
      bookId: 5,
      body: `When I was little I loved EVERYTHING Clifford! I remember wishing I could have a dog as big as he was :) You cannot go wrong with any of the books in the Clifford the Big Red Dog series. I have read pretty much ALL of the book's, but there is no way I'm gonna go through and rate all of them individually. There are just too many for that. These stories are super sweet and teach about friendship. The books are addicting and impossible not to fall in love with Clifford and all of his pals. Clifford is such a BIG adorable goofy dog and it's no wonder why this is a classic!`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 14,
      body: `It made me look at my own dog differently, wondering how it feels, how much it loves me, and what it thinks about his own life. I hope that all animals souls are like the ones in this book and I found myself laughing as much as I was crying while reading this book`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 14,
      body: `Many lives. One everlasting unwavering loyalty.

      In this novel we learn the story of "Bailey", a very special doggy. Through many of his several reincarnations, from wild to domestic dog, a very confused and adventurous Bailey tries to find the existential purpose of all his many lives, and the reason of his dogness. Bailey is a good dog, and when he finds eight years old Ethan, everything seems to fall into place; but a dog's life is brittle, and Ethan is not safe...
      
      Funny. Endearing. Extremely moving. Highly recommendable for the animal lover, and specially more to those inclined for the canine type. This novel really makes you feel partly dog and experience the world through its eyes.`,
      rating: 4,
    },
    {
      userId: 1,
      bookId: 7,
      body: `Please don't think me churlish, but I will kick off by saying that this book is not terribly well crafted - it's repetitive and poorly copy edited. So, if you're snobby about writing, I suggest you give it a miss. That said, it'll be your loss, as it is a heartwarming book with an important message, for reasons other than its prose.

      Bowen describes how he was 'invisible' when he was homeless, and the difference it made when he found Bob and took him busking with him. Suddenly people - the public - saw James, interacted with him, respected him. Having Bob humanised the man who was with him, and helped James turn his life around.
      
      It echoes why this book matters: were it entitled 'A Man Named James' I strongly suspect it would be invisible too. I doubt it would be published, let alone topping the bestseller charts, with James on TV sharing his experience. As a cat lover, it was Bob that made me gravitate to the story, and I'm sure I'm not alone (he is a particularly fine feline for all sorts of reasons) but there's so much more to this than fluff: through telling us about Bob, James is also able to share what it's like living on the streets, to busk, to sell the Big Issue and to come off drugs - all things most of us would otherwise shy away from reading about.
      
      James Bowen isn't a writer, and he acknowledges at the end that he had some help in putting his story together anyway. But whilst A Streetcat Named Bob might not be great literature, it increases our understanding of people who often don't have a voice, and for that deserves its plaudits.`,
      rating: 4,
    },
    {
      userId: 3,
      bookId: 7,
      body: `Looking through the reviews for this book there is a lot of hype against the writing so I won't bother writing anything about it, you'll see for yourself!
      I loved this book for so many reasons!
      Living in Britain (Probably anywhere, in fact) There is a lot of irritation and even anger towards homeless people, it's very close-minded and I think ANYONE could benefit from reading this book. You see it from a whole new perspective and I do believe Bob makes that easier. Humans seem to find it easier to feel compassion towards animals and not our own which is why this book will catch ANY animal lovers heart. You can feel James has a connection with Bob, he makes it so evident.
      It's a wonderfully tale of a mans journey through, most likely, the hardest experience anyone could ever endure. Addiction isn't easy.
      I've been enlightened and my heart has softened considerably to 'Big issue' sellers and to those I once thought slightly lowly of before. A street cat named Bob has the ability, if you let it, to start seeing the stereotypes differently.
      To sum this crappy review up
      Cat lovers and happy-ending lovers READ THIS! Anyone who is a close-minded, 'The sun' reader you MUST read this.
      Bob is a baaaaabe!`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 18,
      body: `This was a GREAT book for anyone who wants to learn about the way animals process information - and as a bonus, you learn about how humans do as well. I love that the author puts things in terms a lay person can understand, and I love that she is honest and humble. Grandin writes matter-of-factly about her own disability, and how it has enabled her to identify with the minds of animals in certain ways. I came away with a deeper understanding of how to interact with my horses and dogs, and found that many of the ideas I had suspected about their mentality, she confirms.

      There were a few small (very small) theoretical points on which I disagreed with the author. But these minor issues are entirely theoretical, and don't take anything away from the book.
      
      A very worthwhile read for any animal lover/owner/handler, or just anyone with an interest in the mind and how it functions.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 18,
      body: `I have mixed feelings about this book. On the one hand, it's almost worth the purchase price for the explanation of the difference between negative reinforcement and punishment, a distinction that escapes far too many pet owners, not to mention parents. And there is a ton of useful information in it for people who are learning about how animals think.

      However, there are a few spots in it that give me cause for pause. Grandin has some unique ways of looking at things, and once she has a hypothesis, she is going to prove it come hell or high water. One fairly benign example is that she seems to be under the impression that only autistic humans think in pictures. Of course, many humans who aren't autistic but are visually oriented think in pictures at least as much as in words, and in many cases more so.
      
      More worrisome is her hypothesis that animals are mentally ill in direct proportion to the amount of white skin they have. She contends that paint horses are crazier than solid-colored ones, and the more white they have, the crazier they are. As anyone who has worked with very many examples of both knows, paints on average tend to be mellower than many other breeds which are solid-colored, and the amount of white skin has nothing to do with it. The most reactive paint I ever worked with had only a small splash of white on his belly and white stockings, while one of the most levelheaded ones was an overo with only a minimal amount of color other than white. This kind of pants-seat hypothesizing worries me, because readers who don't know better may take it as gospel.
      
      So this book it worth reading, IMO, but if something in it sounds off to you, check it out with a knowledgeable friend.`,
      rating: 3,
    },
    {
      userId: 3,
      bookId: 18,
      body: `I have mixed feelings about this book, and I haven't finished it, so I'm not sure if it's fair to write a review yet. But one thing keeps annoying me throughout the text: her constant use of the term "animals" when she really means "mammals" or specifically livestock. She makes generalizations such as "animals are visual creatures" which is certainly not true for the majority of animal species. She's specifically talking about livestock and hoofstock, but she's not using the specific term. On page 59, she uses dung beetles in an example of differing forms of sensory perception but then actually writes "I know dung beetles are insects, not animals, but..."

      Um, what? You have a PhD in animal science, but you don't think insects are animals?
      
      In order to get through the book I find myself mentally replacing the word "animal" with "mammal" in order for the text to make sense -- but even then, there's too many gross generalizations that annoy me. Also, Grandin comes across as somewhat smug and snobby about her "talent", but I'll attribute that to her autism and difficulty with human social interactions.
      
      I agree with some of her perspectives; disagree with others. It's not a bad book, but it's certainly not the be-all and end-all of animal behavior.`,
      rating: 3,
    },
    {
      userId: 1,
      bookId: 17,
      body: `John Bradshaw is a master of redundancy—in both the bad and the good senses of the word. He has a few simple ideas bolstered by sparse research—cats are barely domesticated, cats are not social, cats are predatory and territorial, cats think we are non-hostile cats, cats think we are their mommies, cats use their senses differently than we do—and he applies and re-applies these ideas to different aspects of cat lore (archeology, history, research, training, etc.) in a way that reinforces his insights but also wearies our attention. The reader senses that he has heard this somewhere before. And he has . . . a couple of pages ago.

      Because of my irrational fondness for a marmalade tuxedo named Banjo, I am particularly interested in the history of orange cats. I thought the two most fascinating facts in the book were these: 1) if Ancient Egyptian paintings are an accurate guide, the orange cat was probably the first variation specifically bred for color, and 2) that marauding Norseman favored the orange cat may be inferred from the fact that today the districts in England which have the highest percentage of orange cats are precisely those areas once pillaged and settled by the Vikings. (I am sure the book contains other fascinating cat facts as well, but—since they are not about orange cats—I cannot recall them at the moment.)`,
      rating: 2,
    },
    {
      userId: 2,
      bookId: 17,
      body: `I saw some complaints from other reviewers that this is three books in one--evolution, history, and psychology--but to me this was a feature, not a bug. A little bit of everything I'm looking for in books about cats.

      Bradshaw's musings on the future of the domestic cat are thought-provoking and though I'm fully in favor of all pets being neutered and spayed, he has a good point that in the case of an animal capable of teetering between wild and domestic from one generation to the next, it makes sense to continue some on-purpose breeding of the most docile if we want to continue enjoying and having them accepted as pets.
      
      His sensible evaluation of the studies claiming that cats are destroying birds and other wildlife is also well worth a read for cat lovers.
      
      I appreciated the copious citations to all kinds of cat research--and there's definitely not enough in the world, especially on their health and psychology--along the way.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 17,
      body: `I purchased Cat Sense immediately upon listening to Terry Gross' interview with the author and am sad to say I was disappointed. I mean, to be completely honest, I read it hoping that it would unravel/discuss the adorable quirks we see in our own cats (which may or may not have explanation yet), and not things I'd already learned while Googling shit like "why is my cat a jerk" and "why does my cat poop literally 2 inches from the litter box." Also, coming from a biology background and having taken even the most rudimentary neuroscience/animal behavior classes (and having watched all 7 available seasons of Big Cat Diary on Netflix, cough), I didn't feel any of the information presented was particularly new to me.

      So yeah. 3 stars. I don't know if it was the author's writing style, the "we think this may be the case explaining ____ but [Kanyeshrug] who really knows" theme surrounding all cat-related research, or the "well no shit I've only owned a cat for 4 months and I could have told you that" attitude I felt myself developing while reading... but I honestly just felt this book was dry and I skimmed a lot of it. And that's NOT to say I don't have a taste for books about animal behavior/evolution, seeing as I enjoyed the everliving hell out of Brian Hare's The Genius of Dogs.
      
      On the bright side, this book gave me a few good tips on how to/renewed my motivation to clicker train my cat. Much excite.`,
      rating: 3,
    },
    {
      userId: 1,
      bookId: 22,
      body: `I had to take a second look at this book and put aside my "adult-ness." For some reason, this book didn't click with me at first. After the second reading, I could see a bit more humor in it. I just hadn't take the time to study the illustrations. Gosh!

      So, Farmer Greenstalk drops his watch into the well on Monday. The chickens RUSH onto the scene, dressed (some of them) in bathing suits--one and two-piece!--swim fins, masks, bathing caps, wet suit, bishing pole...Pretty funny, okay, I get it! :-) "Those are some chickens!" said Farmer Greenstalk, as the chickens walk off the page, dripping.
      
      When the dog eats Jeffrey's homework on Wednesday, chickens take over again. My favorite scene here is the chicken who is giving the dog (who is hiding under the bed) the stink-eye for being naughty.
      
      I think K-2 will really like this book. I can hear them all chorusing "Chickens to the rescue!" I will probably read this using the document camera so that everyone can see the detail of the illustrations.`,
      rating: 4,
    },
    {
      userId: 2,
      bookId: 22,
      body: `I LOVE the illustrations in this book. The chickens are wearing swimsuits and scuba gear when they recover the farmer's watch from the well. Their expressions are priceless as they prevent duck from making a get away in the farmer's truck. The chickens are hilarious as they save the day over and over again.

      Could use for reading comprehension strategies predictions & inferences.`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 24,
      body: `This book cracked me up. I don’t think the artwork is worthy of a Caldecott, but the story is wonderful. Doreen has a wicked sense of humor.

      A group of cows found a typewriter in the barn and they are typing up letters of demands to the farmer. When the farmer finds the notes, he gets angry and the cows go on strike and will not milk any longer. Then the hens go on strike as the cows are typing for them. The farmer is so angry at his animals. Anyway, all they want is electric blankets for the cold nights - that’s it.
      
      A duck acts as diplomat and gets the blankets for the animals. It’s a beginning book that is simple, to the point and so funny. I loved it.
      
      The kids thought it was funny too. The nephew gave this 5 stars. He thought the cows were hilarious. He said he was going to type up some demands. Oh boy. The niece thought this was funny too and she gave this 3 stars. She said it was cute.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 24,
      body: `This was a free library giveaway and we loved it! These smart cows that show the pen is mightier than the sword, in this case typewriter.

      It was funny. The kids and I giggled a bit. I think it shows kids it is never too late to learn something new and that you can fight for justice (or electric blankets) no matter your size or circumstance. Enjoyable.
      
      Click, clack, MOO!!!`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 9,
      body: `Vicky Myron's "Dewey" is a book about many things: life in small town Iowa, Vicky's own life history, the important role a library can play in the life and identity of a community and, of course, Dewey Readmore Books, one of the best known and well loved cats in the world.

      Despite the variety of topics Myron writes about, her book holds together so well through her decision to write honestly about everything. Some of her personal and family history was obviously difficult to write about, but its her willingness to do so that makes this book much more than a simple book about a library cat.
      
      Dewey was, of course, the catalyst (catalyst) for writing the book and his story is a great one. His adventures as a library cat make for entertaining reading and any cat lover will appreciate Dewey's spirit and personality. Even more, cat lovers will nod knowingly as they read about the strong emotional bond Dewey has with those closest to him.
      
      While Myron was Dewey's "mom", she also has the wisdom and the insight to understand the impact one special cat can have on individual lives as well as an entire community. She also does a fine job honoring and respecting that one special cat and the impact he had on her life.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 9,
      body: `A non-fiction book about an adorable cat and a small town's history. The cat helps change that history and give the town's heart a bit more beat. Until they acted like asses at the end of his life and started taking that for granted (typical people!) It really comes across as an almost miraculous story when the little bundle of kitten was discovered in the mail slot like discarded trash. I'm sure the librarians never imagined how popular the cat would eventually become and how much it would affect the life of the librarian, Vicki.

      While some of the town lore was interesting, I admit to skimming some of it. The fun antics of Dewey captivated me - I'm a cat lover myself so could relate to some of the chilling spots, box obsessions and personality quirks, but there were new cat weirdness situations that was new to me. For example, Dewey LOVES rubber bands, so much so that they had to keep them under lock and key.
      
      The cat's adorable, and if you ever wanted to know how a cat would adapt to living in a library, here you go. Cats and books go together, right?`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 9,
      body: `While this is not a great literary book, I give it high rating because it touched my heart and is such a strong reminder of how much animals add to our lives. If you have ever saved or rescued an animal, you know how grateful they are and how much love they give back. They bring us though hard and sad times in such a special way. This little guy touch the hearts and lives of an entire town and, through this book, continues to touch hearts.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 29,
      body: `I have reviewed several other books in this series that appeared shamelessly plagiarized, with several passages copied almost verbatim from another source.

      I can't tell how much of this particular book is the author's own text and how much is copied from somewhere else but it has the same disclaimer as the plagiarism suspects:
      "I have relied on my own observations as well as many different sources for this book and I have done my best to check facts and give credit where it is due. In the event that any material is used without proper permission, please contact me so that the oversight can be corrected."
      
      No credit is given to any sources whatsoever so this assertion is just something the author never actually meant.
      
      Whatever those sources might be, it appears that the author did not really understand them. For example, this makes no sense: "They have been categorized as a consumer in the desert food chain, thus making it an easier for the predators to find them." Being a consumer in a food chain has nothing to do with how difficult it is for the predators to find you, it means that you eat other living organisms (or things that used to be living). Predators and herbivores are both consumers, as are bacteria that eat decomposing organic matter. In contrast, plants and certain micro-organisms are producers, which means that they get their energy directly from the sun and chemical reactions.
      
      There is a paragraph titled "Life stages" that has nothing to do with life stages, just mating: "The females have a powerful aroma that they send out through their glands, when they wish to attract males. Mating time is always when the most food is available to them, usually between April and July. The males will immediately roam after mating to discover other females for breeding. Sometimes the males battle each other for the right to breed with the females."
      
      The text is a bit repetitive. The reader is told several times that they live in rocky environments in the desert areas of America, and that they like to seek shelter in crevices
      We also learn that "they will consume local fruits and plants that are growing in their environment", and "they feed on leaves, flowers and fruits from the nearby plants". This goes without saying, does it not? Pretty much every animal in the wild consumes local food that grows nearby. I do believe humans are the only species that finds it feasible to feed on plants that grow far away.
      
      On the bright side, I did learn an interesting tidbit that the chuckwallas like to eat yellow plants. No idea why though.`,
      rating: 1,
    },
    {
      userId: 1,
      bookId: 13,
      body: `I would have cried a little, had I not been listening to this at work :)

      Georgina and her family are recently homeless and living out of their car. Georgina is ashamed to live this way and lashes out toward her mother, who she blames, even though her mother is working multiple jobs and trying her best. The father is gone, and left them with nothing. Georgina has a younger brother named Toby.
      
      Georgina finds an a missing dog poster with a reward of 500 dollars. She gets the idea to steal someone's dog in order to obtain reward money. Georgina wants the money so that her family can afford an apartment. Her and Toby find a dog to steal, figuring that the owner was wealthy and would give a large reward sum.
      
      Of course, nothing really goes as planned. The story explores right vs wrong, our assumptions and our implicit biases. for example, the children meet someone named Mookie, who is also homeless, and challenges their assumptions about "bums".
      
      How Georgina deals with the aftermath of stealing a dog is a great lesson for young people.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 13,
      body: `Wow! This is a touching story that shined some light for me into the life of homelessness from a child's perpesctive. The main character, Georgina, deals with some tough times while living out of a car with her mother and younger brother. It is a real eye opener; reminding me not to take things for granted.

      This is a must read for anyone who works with children, especially in a title I school setting. We may never know what our students are really going through outside of school.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 1,
      body: `Did as a read aloud with my class. There are just other books that I like more that do not flat out state the theme or message of the story.`,
      rating: 3,
    },
    {
      userId: 3,
      bookId: 8,
      body: `Oh no... I don't get it! This book screamed my name the moment I saw it. I love this type of books, I love cats and I agree that cats are secretly planning to kill us all. See? There was no way I would not love this book.
      And yet that's exactly what happened. Wish I liked this more but unfortunately I could not. I did not laugh one... it was just missing something, it felt very flat.`,
      rating: 2,
    },
    {
      userId: 1,
      bookId: 8,
      body: `I didn't really need this book because as the proud owner of five cats, I know full well that the only reason I’m still breathing is because their lack of thumbs makes it impossible for them to open their favorite cans of food.

      Readers of Matthew Inman’s website The Oatmeal should have a pretty good idea what to expect here. There are lots of very funny comics related to cat behavior well as a chapter filled with The Bobcats, two necktie wearing felines who make the office hell for their coworkers.
      
      The bonus on this one is that the wife and I got to meet Inman at a book signing where he did a Q&A as well as relate several stories about his life that included cats, dogs, horses, bears, frozen gerbils, a fish named Peter Jennings, a house fire and acting friendly towards a neo-Nazi kid just to use his Game Boy.`,
      rating: 4,
    },
    {
      userId: 1,
      bookId: 19,
      body: `This story is cute and it reminds me of the nephew. A father is trying to read the little Hen a bedtime story, which is something I do too, and the little Hen keeps interrupting the story because she knows it. Both, the nephew and the niece, but mostly the nephew have this issue. If it’s a good story, they get involved and they have to interrupt the story to ask a question or make a comment. Unless it’s a slow biography story that bores them to sleep, but still, a question will creep up.

      The father in this story goes through 3 quick stories and the Hen changes or interrupts all of them. I do find that the nephew is better with new stories because stories he knows, he is fidgety and his attention wanders. It’s better to just read more in the series.
      
      The artwork is nice here. Is it Caldecott worthy? Maybe. I do like it though. Lots of color and textures in the artwork.
      
      The nephew thought the story was funny and he did see himself a little in the story, which made him chuckle. He thought the dad was funny and he enjoyed that the Hen wore down the dad. This was 4 stars for him. The niece thought the story was ok. She did appreciate the Hen trying to warn the character about what was going to happen in the story and changing it. She gave this 3 stars.`,
      rating: 3,
    },
    {
      userId: 2,
      bookId: 19,
      body: `A 2011 Caldecott Honor book that I read primarily because I saw it on Calista's site, though she gave it only 3 stars, and then confirmed that it would be the kind of title Melki would read (and it is; I look to Melki for the best--oddest, most startling, funniest--titles, when I need that kind of fix.

        I like surprising picture books and this kinda was; a chicken Dad (ok, rooster), is trying to get his kid (ok, chicken, though not to say chick) to go to sleep, reading to him book after book which the kid (these are anthropomorphic chickens, hey) interrupts with a solution to the main character's problem and then the reading is over; for instance, in the reading of Hansel and Gretel he screams, "don't go in! She's a witch!). Papa eventually falls asleep when child reads him his own story about putting his father to sleep. Kinda funny, right? With goofy, kinda weird (do these birds look like chickens? really?) brightly colored artwork. Pretty fun, I think especially would be for kids.`,
      rating: 4,
    },
    {
      userId: 1,
      bookId: 32,
      body: `Reptiles make great first pets. They don't take up a lot of space, their needs are simple, and they are fun and adorable. Considering there are many different types of pet reptiles with varying levels of care needs, you are bound to find one that fits your family perfectly!`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 11,
      body: `Oh my gosh, I used to love the Animal Ark series as a kid! Because of my strong love for animals, these books made me want to be a veterinarian when I grew up.(Along with the television show, Zoboomafoo. LOL.) Good times!!! Mandy, the main character did drive me a little nuts as a kid, but I really loved all the different animal stories, and how Mandy could help and save them. It was SUPER SAD whenever an animal actually died...! But it really goes to show that real life is just like that too.

      I particularly liked all the cat stories in this series the best, like Kittens in the Kitchen. I can't remember all of it and I'm probably getting confused with one of the other cat stories, but I do remember some guy REALLY hating cats and he was super scary - like he wouldn't hesitate to kill one with his bare hands. :P`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 11,
      body: `I read this series when I was younger. My grandmother bought the entire set (that had been published at the time) and gave them to my cousin; who hated them. She loaned the set to me and I read, and re-read, them all. I loved these stories, and even now when I stumble across one I haven't read I'll sit down and read it. They are a little cheesy from the adult perspective, but as a eight-twelve year old girl I couldn't get enough of them. I was so angry when my dad made me give the books back to my cousin, who in the end threw them away. If you're looking for a good book for children who love animals and reading, these books are worth a try!`,
      rating: 3,
    },
    {
      userId: 1,
      bookId: 12,
      body: `I love the Oatmeal's comics, and I love reading things to my little boy, so it seemed completely natural for me to try sharing this book with my little boy.

      It... didn't work out so well. As I started reading, I realized that a lot of the humor wouldn't make sense to him, or would just be in appropriate.
      
      The one exception was the comic about the dog eating its own poop. We had a good laugh together over that. Apparently poop-eating is a universal constant in terms of humor....`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 12,
      body: `Matthew “The Oatmeal” Inman waxes amusingly on his beloved dog, and on dog ownership in general, in My Dog: The Paradox. Every dog owner reading this will see their pet’s behaviour mirrored here, particularly, if you have a small dog like me who likes lying down in awkward areas around the house, when you accidentally kick them and they act like they should be apologising to you!

      It’s been a long time since I’ve seen them do this (since the cats died) but, like Inman’s, my dogs used to eat cat shit occasionally, though I don’t know why he’s surprised that his dog won’t eat broccoli – whose does?! Veggies aren’t for canines – hell, I know more than a few humans who turn their noses up at healthy greens! And my dogs are also sensitive to loud noises (even heavy rain) but quite happily charge towards motorbikes when they appear!
      
      Maybe I’d have liked this better if I hadn’t recently read Inman’s other dog book, If My Dogs Were a Pair of Middle-Aged Men, which is similar in content but funnier. Also, this book is very, very short. Still, it’s full of cute, enjoyable observations about the strange, adorable creatures many of us live with and who bring so much happiness with their companionship.`,
      rating: 3,
    },
    {
      userId: 1,
      bookId: 16,
      body: `Oliver is a heartbreaking story that slowly puts your heart back together as you read on. Steven’s dog Oliver is stolen from his car when he was out picking up food. He thinks his best friend is gone forever but his sisters and friends help him begin the search. Soon, the whole town helps out with making sure Oliver is found. The community joins together, making Steve realize a lot about himself and others.

      The community coming together for Oliver was so wholesome and Oliver himself is a wonderful dog. He sounds like SUCH a good boy. I’m so glad that he was reunited with Steven. (Not a spoiler, it says so in the synopsis that they find him). I also think that if knowing he wasn’t found, I’m not sure I would be able to read this because I was STRESSED waiting for them to find each other.
      
      I can’t imagine losing your dog that way, for a whole week, and not knowing what happened to them. This is a lovely book for all ages, perfect for any dog lover. I love how much our author loved dogs and the passion he feels for them because I could relate. Your heart breaks for him and in my case, a tear may be shed. Plus, look how adorable he is.`,
      rating: 4,
    },
    {
      userId: 2,
      bookId: 16,
      body: `I loved this incredibly heartwarming and powerful memoir about our love for our animals and how much joy they bring to our lives. I know that in my household, our pets are families and for many they are more than families when they bring so much to enrich and bring happiness to our lives. just imagine when Oliver was taken from Steve, he was so heartbroken, lost, in misery and has lost his faith in all of humanity. This is a story of how when something awful happens in your life, you see the miracles that happen and how it teaches valuable lessons not soon to be forgotten.. There are many things in life that is out of your control where faith and trust is all you have left. submitting ourselves to our faith is what this book taught me as well as many others about the power of love, the kindness of strangers, the support of a community and how much empathy, kindness and generosity there is in the world.

      This was simply an incredible read I loved and enjoyed.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 16,
      body: `I was given this book in an audio version by NetGalley for an honest review
      Let me preface I knew the story or at least the public story of Oliver. I live not far from the stop mall where Oliver was taken from. I remember the whole event it hit me hard having lost my yorkie the week before I remember following it on the news and watching the tearful reunion on Facebook. I was one of the many people who not only shared the story but sent a message to Steve and his family wishing for Oliver’s safe return.
      That being said it was nice to hear the whole story how they came to be so close. The story of someone’s life and how they were able to turn it around. How when you think you are truly alone in this world people from your past, family members you have not seen or spoken to in a while or complete strangers step up and make you realize you are never truly alone.
      
      My only issue was I wish a someone else had narrated it. Steve paused a lot and his voice broke several times as he described the events.`,
      rating: 3,
    },
    {
      userId: 1,
      bookId: 41,
      body: `I very much liked this book. Good,practical advice and easily read and accessible. I must confess the last chapter brought a lump to my throat and I actually saw in my mind's eye the little farewell having gone through the process with past pets. Hey the book. Especially for children. Faultless.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 41,
      body: `Excellent information for a new rabbit owner. Clear and detailed information. Easy to read and excellent information to start out being a new bunny parent.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 41,
      body: `Picked this up from Amazon because I am getting a rabbit soon.
      It was quite informative but could of done with a bit (well quite a lot) more practical information.
      It's very general and felt a bit like a friend telling me about their experiences with rabbits. The frequent referrals to the costs of things felt a bit strange, although I guess its better not to be ignorant of the fact that pets cost money!
      The ending was a bit upsetting - I didn't expect to be suddenly thinking about the death of my pet before I had her, but that is a reality so I suppose it's best not to overlook that as well.
      Overall a quick read that did enlighten me some what.`,
      rating: 4,
    },
    {
      userId: 1,
      bookId: 35,
      body: `A must read for every woman not just horsewomen. I was hooked in the first several pages. The more I read the more I wondered "How can she know exactlt what I have had going on in my head. How can she know exactly what I have experienced? This book will be one I will re-read several times as I do Women Who Run With The Wolves. Miranda guides you back to re-claim the powerful, confident woman you were born to be or if you have not claimed your birthright. Thank you Miranda for reminding me who I was and who I am.`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 15,
      body: `Family...that can be those you are related to or those you choose to surround yourself with. For 12 yr old Pete Solomon his family became those he choose. Dr Lucy Armstrong had chosen a solitary life sans family and friends, until she met Pete. An injured wolf hybrid brought them together. Then Justin and Calvin Bell entered the picture and the family became larger. It is the 1950's and miscegenation rears its head. Years go by, life goes on, and the world catches up to this family.
      Catherine Ryan Hyde is a superb author. She can take an everyday happening and make it into a story. This book is a great example of why she is a New York Times Bestselling author.`,
      rating: 4,
    },
    {
      userId: 2,
      bookId: 15,
      body: `As much as I adore my creepy and intense thrillers and mysteries, over the Christmas holiday I wanted to snuggle up with a book that didn’t have a serial killer as a main character. I won a copy of Say Goodbye For Now from the author and was so exited as I’ve had several of her books in my TBR and hadn’t gotten around to them before now. I’m kicking myself now that I waited this long to read one of Ryan Hyde’s novels and I’m vowing here and now to read some of her other work in the new year. This book totally hit the spot and was just the type of feel good read that I was craving.

      It’s 1959 in small town Texas and though Lucy and Pete have both lived there for years, they haven’t crossed paths before. Lucy is a doctor who quit practicing after many people had objections to being treated by a woman. She’s distant and isolated, both physically and emotionally and surrounds herself with stray animals no one else wants. Pete is the sweetest kid and when he finds a dog hurt in the side of the highway he takes it to Dr. Lucy for help. Justin and Calvin are father and son and new to town and the young boys become fast friends. These four have no idea how their chance encounters will shape and define their lives in the future, but they all have lessons to learn and things to teach each other.
      
      Ryan Hyde sure knows how to write a page turner, I couldn’t wait to see how this story would turn out. She wove a story that was both beautifully tender and brimming with heavy issues, but she managed to convey a strong message without leaving me feeling like I had read something emotionally draining. There is Lucy who is dealing with the loss of her son and husband as well as sexism, Pete who is an abused child, and Justin and Calvin who are African American in the fifties, enough said there. As these four struggle with their own issues, they manage to find solace in each other and it was a truly gorgeous thing to witness.
      
      This was an effortless read, the chapters alternate between Dr. Lucy’s point of view and Pete’s. The bulk of the story is told within the first few months the four meet, then the last half spans the course of eight years. I feel in love with all four of them, but Pete especially left a mark on my heart, he is a special kid who is wise beyond his years. This is begging to be picked for a book club read, there is so much to discuss and explore. Also, if you’re an animal lover there are some really great moments here with all kinds of creatures. `,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 28,
      body: `So the information given in this book was both encouraging and informative. ( there's a link at the end of part one that allows you to enter your name and email into their system giving you two downloadable PDFs that summarizes how to breed, feed and raise crickets well.) I doubt I'll blend food for my crickets but maybe. The thing I liked about this book was not only that it gave me insight into how to breed and raise my own crickets for a bearded dragon, but also part 2 about Cricket Behavior actually help me to be less grossed out by them. I'm sorry but crickets are disgusting and I don't want to touch them and that's been kind of one of my biggest fears of doing this. We're new to this whole bug touching, feeding, lizards thing and understanding that crickets are actually an intelligent bug made me respect them more which actually took away my fear and grossed out opinion. Anyway I'm glad I bought the book. It was just what we needed to start mentally preparing. We'll get more visual ideas from You Tube from this point forward.`,
      rating: 4,
    },
    {
      userId: 1,
      bookId: 37,
      body: `This book arrived in a timely manner and is in pristine condition! There's so much helpful information in this book--I'm very happy with my purchase. Kudos to the seller: SENIOR DOG RESCUE. The proceeds of their sales go to rescuing/helping older dogs.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 37,
      body: `I have 2 african grays and a canary. I have owned numerous avairy finches, parakeets, and several parrots. This book is awesome in the vet information that is usually lacking in the species specific type books. It is mostly geared to parrots, but in that respect, it is a must have. I buy and read any parrot training or info book I can find to keep current on ideas and care, so i see a great deal of repeat information. This is one of the very few books that has really presented info that all the others had not rehashed several times. Before i knew it, i was over 200 pages into the book, and that was just about info i thought I knew. Any bird owner should have a reference book of illness for that 'just in case' factor. This book is it and more. It is as complete as a bird book can be although I doubt any book is ever "complete". Yes, the book cost more than most but it is worth more than most, and has more info than the majority. Start here and then buy the others, you will probably end up actually saving money.`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 1,
      body: ``,
      rating: 3,
    },
    {
      userId: 1,
      bookId: 23,
      body: `All of the farm animals seem to be happy with the fare they are provided by the farmer. From slop for pigs to corn for the geese and a bale of hay for the horse. However, the cow much prefers a cookie or two. But why is that and how did it all come about? As the story progresses, the mystery is revealed and it all makes sense in the end. Neo loves his cookies and can see why the farmer and cow might share a special ritual together. Delicious things those sweets and complemented nicely with a good book!`,
      rating: 4,
    },
    {
      userId: 3,
      bookId: 23,
      body: `Rhyming book about the different farm animals and what they like to eat. Each time a new animal is named the list of the other animals follows, and the list rhymes but doesn't repeat from each repetition to the next. The illustrations are loose and colorful as well. So you think I'd at least like this book but...

      I have to admit, I found the ending a little creepy, where the reason the cow loves cookies is because every day she and the farmer go have a "picnic lunch" where he milks her and they share the cookies and milk. I own milking goats, and I'm certainly not against drinking the milk (we have it every day with breakfast just about), but there was something about that last scene that just... set off weird vibes for me.`,
      rating: 1,
    },
    {
      userId: 3,
      bookId: 40,
      body: `Some of the information in this book is not accurate. It gives bad advice to potential new rabbit owners. Rabbits should not drink out of water bottles or have wire bottoms to their cages. Both of these things could potentially hurt your rabbit. Many of the "rabbit" products that are sold at pet stores are actually hazardous to rabbits. Anyone who is thinking about getting a bunny should consult their local rabbit rescue or the House Rabbit Society.`,
      rating: 2,
    },
    {
      userId: 1,
      bookId: 40,
      body: `The book looks like it was probably self-edited and published - nice layout, easy to follow, found it in our library system.

      It's definitely aimed at pet owners (rather than breeders) and at those considering whether they want to get a bunny. It's pretty basic which makes for a good introduction but I would definitely suggest following it with a more comprehensive text. Will keep looking to see what else the library has.`,
      rating: 3,
    },
    {
      userId: 2,
      bookId: 40,
      body: `I liked this book. It was a quick read but has lots of great information plus freebies at www. everythingrabbit.com. It's not super in depth, obviously, but i still took notes and learned a lot.`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 27,
      body: `I loved this book as much as everyone's Eric Carle favourite - the Very Hungry Caterpillar. The face of the chameleon who never quite matches his surroundings is precious. Highly recommended to anyone looking for a book to entertain them as much as their child.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 27,
      body: `This is a great story; as usual Eric Carle's illustrations just jump off the page, making everything seem alive. This story was a good follow up for the kids discussion on chameleons today. It reinforced what they learned about chameleons changing colors. A few pictures also supported the fact that a chameleon's eyes are independent of each other and can look two ways at once, I never knew this before so that was interesting. If I hadn't seen my cooperating teacher mention this to the class I would have thought Eric Illustrated the chameleon's eyes as a bit freakish on purpose!

      Other than as a follow up after a lesson about chameleons, this book is a great story in general. It has a cumulative effect where each animal the chameleon wants to be is illustrated tiny on the side of each page, the number of them growing as the story progresses. On the other side of the page, the colors of each animal are added as the story goes on as well. The kids thought it was hilarious to see how weird the chameleon looked every time he wanted to look more like another animal on each page.Overall a great book, lots of color and lots of fun for kids.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 27,
      body: `The Mixed up Chameleon becomes bored with his daily routine until one day he sees the zoo. As he begins to admire characteristics about the other animals he wishes he could be anything but himself. I would compare The Mixed up Chameleon to the book A Color of His Own, which is also about a chameleon. However, the chameleon in A Color of His Own is simply looking for a color of his own instead of always camouflaging with objects in his environment. A great response activity for these books would be to have students choose one book and complete a character map for the character in their book. Then, as a group activity use chart paper to compare and contrast the details the students came up with. Another fun response activity would be to have the students write a narrative piece from the perspective of the chameleon.`,
      rating: 4,
    },
    {
      userId: 3,
      bookId: 25,
      body: `I've just read a one-star review of this book that was, to me, highly amusing. It has been one-starred because the reviewer thinks it is nothing but socialist propaganda, in other words it's going to lead toddlers and little children straight down the Red Road to Communism.

      I'm pretty sure the reviewer is American since no one in Europe would actually care whether it was socialist propaganda or not, socialism being a perfectly acceptable political philosophy there. Indeed many governments have been socialist, and why not? It's only another variant of capitalism as practised.`,
      rating: 3,
    },
    {
      userId: 1,
      bookId: 25,
      body: `This is a children's book that I have read to my twin boys. This was one of my favorite book when I was a kid, and my twin boys really loves when I read this book to them. I love the message in this book. I also love the bright pictures in this book. I writing in this book is cute and written so that young kids can pick up on the message. Great children's book, and I have read this book a ton.`,
      rating: 5,
    },
    {
      userId: 1,
      bookId: 21,
      body: `The Trouble With Chickens (J.J. Tully Mystery #1) by Doreen Cronin is such a cute story that even I enjoyed it. It is about a retired search-and-rescue dog that lives on a farm now, chickens that have him on a mission to find lost chicks, and a sneaky inside dog. It is clever, funny, and very witty. I couldn't help but smile several times throughout the book. Well written, fun book for kids. This should be a movie for kids! It would be adorable.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 21,
      body: `Just as Click Clack Moo (as brilliant as I find that book) raised questions about how many young readers would be familiar with typewriters, so this novel raises the question with regard to detective fiction (a question it shares with the Chet Gecko series). I don't necessarily have a problem with parodying adult genres in children's lit, but it seems like you'd want to pick a genre kids are likely to be familiar with through TV or movies.

      Nevertheless, I don't have that problem - I've read Raymond Chandler - and I thought this book was hilarious. It's probably quite funny to kids who don't know a thing about detectives as well, and it certainly has more than enough adventure, and a great twist, so in the end it probably doesn't much matter.`,
      rating: 5,
    },
    {
      userId: 3,
      bookId: 21,
      body: `I got this book from the library because I thought it might appeal to some of the Primaries, newly hatched readers who are now studying things that hatch. It seemed a perfect match, but this title, "The Trouble With Chickens: A J.J. Tully Mystery," like some of Cronin's other work, suffers from confusion of audience. In tone and language, this book wants to parody Raymond Chandler's "private dick on a case." However, I suspect that few children of Primary age are familiar with "The Long Goodbye," or other livres noirs. Consequently, unless this work is read aloud to children by a reader willing to commit to her best Humphrey Bogart impersonation, I suspect it will be lost on its intended audience.

      In the 2nd chapter, after J.J. Tully, a retired rescue dog, meets Millicent "Moosh," a chicken who enlists his services, he meets her chicks.
      
      "She called them Little Boo and Peep.
      
      I called them Dirt and Sugar, for no particular reason."
      
      Much is left to "no particular reason," as the writer torments an already convoluted plot in service of Chandlerisms bound to be lost on her readership. I no longer have a k-2nd grader in the house to serve as guinea pig for this kind of story, but plan to test this title with some Primaries tomorrow and see if they both like and "get" this title. If they don't, it won't be a mystery to me.`,
      rating: 2,
    },
    {
      userId: 1,
      bookId: 39,
      body: `I cannot speak highly enough of this book! Amazing and packed full of great information. This is definitely the best domestic duck book out there. I tried many different books before finding this one and I love it!

      It has great detail while also telling the basics. The medical information it contains is stunning and in amazing detail. I also really enjoyed the understanding duck body and vocal language section, which I have yet to find elsewhere in other books/duck resources (+ many other topics this book contains!) There is so much with so much detail. It can be overwhelming at first, but it is soooooo useful.
      
      The only thing this book does not go into is incubating eggs since the author has little experience with that. This was not a problem for me since my family had our ducklings shipped to us at 2 or 3 days old from Metzer Farms in California. However, if you do intend to incubate eggs you will have to look elsewhere for info on that part of things.
      
      I also like the extensive info on plants that are safe or not safe for ducks to eat in Lisa Steele's Duck Eggs Daily, while Kimberly Link doesn't go into the details of that kind of thing in this book.
      Other than that, this is the perfect book for people considering ducks!`,
      rating: 5,
    },    
    {
      userId: 1,
      bookId: 26,
      body: `I love the art style for this Eric Carle beginning book about spiders. It looks like he used construction paper to collage the pictures. The colors are so happy and bright.

      A spider is busy working. All the animals want to hang out with her, but she is so busy she doesn't even speak to them to tell them she is busy. She is sort of rude. I guess that's the nature of spiders. The animals are so cute.
      
      Young readers should love this.`,
      rating: 4,
    },    
    {
      userId: 2,
      bookId: 26,
      body: `I'm not sure exactly what it is about this book, but my kids loved it! I picked it for my younger son who is not quite two, but my three-year-old was also very enthusiastic about it. I had to read it four times in a row. It's about animal noises and a spider that keeps on building her web and ignoring the mooing baaing neighing raucous around her. I'm not sure what the message is (don't talk to anyone and you'll be more productive? Lol) but that spider makes herself one fine web!`,
      rating: 4,
    },    
    {
      userId: 3,
      bookId: 26,
      body: `"The Very Busy Spider" is about a spider that spends all day spinning her web. A variety of different farm animals approach her and ask if she wanted to go do something with them that they enjoy doing. Each time, the spider didn't answer because she was busy spinning her web. In the end, after she finishes her web, she catches and fly and an owl asks who made this beautiful web. But, again, the spider didn't answer because she fell asleep, as it had been a very long day spinning her web. I think this story shows children that determination is a good thing to have. The spider was determined to finish her web and not be distracted by running off with the different farm animals. Her hard work paid off, because at night, she had caught a fly and was ready for bed.

      Learning Experience:
      In small groups, have pieces of white yarn pre cut on the table, and construction paper with a circle drawn on it. Have the children glue the yarn around the circle and make their very own unique spider web. Then when they are finished, glue a picture of a fly on it, to show their hard work paid off.`,
      rating: 3,
    },    
    {
      userId: 1,
      bookId: 33,
      body: `An excellently written and up to date book. I am returning to the hobby as an adult after keeping fish as a child. I have done extensive online research in addition to reading this book and his advice seems to be 100% in-line with current best practices without getting too crazy technical. In fact I wouldn't mind a tad more technical stuff but then I am an engineer with an oceanography background. It's amazing how much I was doing wrong as a kid; I'm amazed my fish survived at all. The new fish are doing great!`,
      rating: 5,
    },    
    {
      userId: 2,
      bookId: 33,
      body: `It was a good read for me but I still want more from the book / booklet. It contains mostly the basics and it was a short information. I can recommend this for those who is beginner and have zero knowledge about tropical fish.`,
      rating: 4,
    },     
    {
      userId: 3,
      bookId: 33,
      body: `Spent about 15 minutes reading through this booklet. I didn't contain anything that I would say is definitive, mostly a bunch of generalities that really don't provide much direction.`,
      rating: 3,
    },     
    {
      userId: 1,
      bookId: 20,
      body: `The back of UNUSUAL CHICKENS FOR THE EXCEPTIONAL POULTRY FARMER recommends the book to fans of Roald Dahl, which is a good call. It doesn't have his particularly wicked humor or sense of real menace, but it does have his matter-of-fact magic and a young protagonist who succeeds through a mixture of cleverness and goodness. It also has ink illustrations by Katie Kath that will remind readers of Quentin Blake.

      Sophie Brown and her parents move to a farm in a small town that they inherited from Sophie's great-uncle Jim. They're new to farm life, but her dad is still searching for a new job and her mom is making do selling articles and they needed somewhere to live. Things start to change for Sophie once she finds a catalog for unusual chickens - and then starts finding unusual chickens. The story is pretty predictable, but it is told with a light hand and strong characterization.
      
      Sophie tells her story through letters to her deceased abuelita, her uncle Jim, and Agnes (who owns the chicken farm). There are also newspaper clippings, lists, and lessons on poultry farming interspersed throughout. The drawings by Kath help tell other parts in the story in addition to illustrating some of the memorable parts of the letters. There are even a few letters from Agnes, poorly typed and brief. I like how actual facts about the work that goes into raising chickens are woven into this tale of unique chickens and the girl who is determined to protect them from a pernicious chicken thief (and anyone else who might use their strange qualities for unsavory means).
      
      Also wonderful is how smoothly Sophie's heritage is woven into UNUSUAL CHICKENS FOR THE EXCEPTIONAL POULTRY FARMER. Sophie, her mother, and her abuelita are all Latina. There's Spanish phrases in her letters to her grandma, the inclusion of a migas recipe, references to the family dancing to Celia Cruz. It's a small but pertinent detail of her life. (Especially in her new town, where pretty much everyone but the mailman is white.)
      
      UNUSUAL CHICKENS FOR THE EXCEPTIONAL POULTRY FARMER is an excellent choice for the younger reader who likes their books flavored with a hint of the exotic. It mostly reads like a contemporary tale of a girl going to a new place, making friends, and finding a hobby. But the subtle strangeness around the edges is ever present and pervades the entire story. It's definitely a fantastical book. A debut worth clucking about.`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 20,
      body: `The title struck me as amusing before I even got to the text. The look in the top chicken's eye's on the cover also cracks me up. There was no way that I could ignore this book and I'm so glad I didn't. Sophie and her adventures had me smiling and giggling over and over even when dealing with serious things. Her first letter to her grandmother is a good example. Her abuela died recently and Sophie writes, "I know you're dead, and I don't believe in zombies, so you don't need to write back or anything."

      And those chickens! The chickens are hilarious and only become more so as you slowly learn how unusual they really are. There is a mystery unfolding throughout the book and I don't want to spoil it, but know that there are many laughs along the way. The humor is also embedded in the fun pictures. Katie Kath has added a lot through her playful illustrations. The expressions on the faces of the people and the chickens are fabulous.
      
      This is a light-hearted and entertaining book, but Sophie doesn't only talk about the chickens in her letters. She mentions the chicken that uses The Force and other bizarre happenings involving superhero type powers, but she also discusses race, class, identity and fitting in. It's done in a matter of fact way and doesn't get teachy or preachy. Sophie is half Latina and looks like her Mexican American mother. She explains that some people assume that Sophie and her mother (who was born in the United States) are undocumented immigrants. Another time she writes, "People always think Mom and I are poor. They even did when we had some money, just because we're brown." This is not a case of a humorous story with a character who "just happens to be Latina." Her culture shapes her story and how it is told.
      
      An extra bit of wonderfulness in the story is the recipe for migas. I love books that encourage me to make something new in the kitchen.
      
      Recommendation: Definitely get this as soon as it's available. You'll want to read Unusual Chickens and share it widely. You may also end up grabbing The Hoboken Chicken Emergency since Sophie is a superfan and read it aloud to her chickens.`,
      rating: 5,
    }, 
    {
      userId: 3,
      bookId: 20,
      body: `There are many things to love about this book, and I regularly repeated them to myself so that I would finish it. Excellent voice in Sophie. Unique storytelling approach in the mostly one way epistolary novel. I loved the telling of the being the new person, the different, in such a different and gentle way. She is having to learn to be in the county, not the other way around. I enjoyed the fact that her parents are happy and supportive but out of the way, that her mother is apparently supporting the family writing for Buzzfeed, and that Sophie is both accepting and exasperated by being multiracial. The book is funny and the story has some interesting qualities.

      But dear Dog Almighty, that's a lot of time reading about chickens. If things other than chickens happened for the first 7/8th of the book I might feel differently. Or, if we had spend more time on why they were unusual chickens... But I can't help but wonder if reluctant readers who would enjoy the writing will stick with the book long enough to get to something actually happening.`,
      rating: 3,
    }, 
    {
      userId: 1,
      bookId: 10,
      body: `Death. The grim reaper. The big nothing. The great leveler. And so on, or no, precisely not, or still? Puh, getting philosophical in here, so put out all your thoughts...

      Come, little kitty cat, tasty eyeballs are served. No matter if it is a dog, cat, weasel, reptile (I am not sure regarding their eating behavior), if time and hunger are combined and carrion acceptable for the animal, well... At least one lives on in his pet, except it gets a food poisoning from rotten flesh which would be an unfunny, black comedy trope, but owner and pet would be at least united in death. Who thinks this is already too heavy probably shouldn´t read this book.
      
      I like horror, humor and science and this book has everything in it. The wit often comes just from the constellations of topics, from questions an adult wouldn´t dare to ask. So the philosophy that is still in kids and gets lost more and more with the ages, jumps from each side because the questions may seem trivial, but have hidden depths. And children aren´t as constrained, onesided, indoctrinated and socially normed as adults so that they still have an open and healthy attitude towards the topic.
      
      Out of the context of this book, but it would make an interesting question for the author: In space flight, the question of how to deal with the deceased, if there are still any, will be a topic too. All the ingredients might be too precious to waste them and many of the extraction procedures to get as much out of it as possible might not work well without gravity or lesser gravity than on earth, may take to long, be too energy expensive or just not economic.
      
      The book is a great example of how the knowledge of an expert can be broken down to interesting, short, funny, intelligent and catchy pieces and how much death can show the living how do be thankful for each day, enjoy each moment, be kind to each other, yada yada yada, boring! Carpe diemality.
      
      The endeavor and motivation of the author to talk about death openly is very important because it weakens faith and makes people realize how short and fragile life is and to probably awaken more awareness and mindfulness. As already said, kids are the perfect breeding ground for healthy, normal thinking and talking about death and in this case, the old saying "Give them to us when they are still young and they belong us forever" gets a positive connotation. Instead of NIMBY https://en.wikipedia.org/wiki/NIMBY, they ask why not the whole family is buried there.
      
      Instead, death has become a taboo, especially in Western society, where it is avoided to speak about it or to change something about how society has been instrumentalized and normed in any way around a topic that anyone should be interested in, because, you know...`,
      rating: 5,
    },
    {
      userId: 2,
      bookId: 10,
      body: `This is a non-fiction book about death, corpses, and funeral practices. I never read any of Caitlin Doughty books, but I hear her books are a short fun read. I have to agree this book was a short fun read. I found the information funny and nice to know. I did not find this book boring like I do with some non-fiction books.`,
      rating: 4,
    },   
    {
      userId: 3,
      bookId: 10,
      body: `This was a little bit too simplistic.
      A few parts in the book I found really interesting, but in general, it was a little bit too oversimplified. It was written in question-answer format (I listened to an audiobook) so it was really easy to get through it, but the majority of questions were just a little bit too ridiculous, I think she could answer more difficult questions then book would be much more fascinating. I could definitely see that she really knows what she is talking about, so I think it would not be a problem for her to answer harder and more scientific questions.
      This wasn't a bad book, I do not regret reading it and now kind of want to be a mortician now.`,
      rating: 2,
    },  
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
