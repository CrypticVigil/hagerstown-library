const initialState = {
	books: [
		{
			title: "To Kill a Mockingbird",
			author: "Lee, Harper",
			publisher: "Harper Perennial Modern Classics, 2006",
			type: "Book",
			summary: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, Scout, as her father, Atticus Finch -- a crusading local lawyer -- risks everything to defend a black man unjustly accused of a terrible crime.",
			cover: "ToKillAMockingbird.jpg",
			pages: "323",
			available: "AVAILABLE",
			id: "001"
		},
		{
			title: "1984 : a novel",
			author: "Orwell, George",
			publisher: "Plume, 1983",
			type: "Book",
			summary: "Written in 1948, 1984 was George Orwell's chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever...",
			cover: "1984.jpg",
			pages: "294",
			available: "AVAILABLE",
			id: "002"
		},
		{
			title: "The Lord of the Rings",
			author: "Tolkien, J. R. R.",
			publisher: "Houghton Mifflin, 2005",
			type: "Book",
			summary: "Presents the Great War of the Ring, a struggle between good and evil in Middle-earth, following the odyssey of Frodo the hobbit and his companions on a quest to destory the Ring of Power.",
			cover: "TheLordOfTheRings.jpg",
			pages: "1,178",
			available: "DUE 05-09-20",
			id: "003"
		},
		{
			title: "The Catcher in the Rye",
			author: "Salinger, J. D.",
			publisher: "Little, Brown and Company, 1991",
			type: "Book",
			summary: "Story of Holden Caufield with his idiosyncrasies, penetrating insight, confusion, sensitivity and negativism. Holden, knowing he is to be expelled from school, decides to leave early. He spends three days in New York City and tells the story of what he did and suffered there.",
			cover: "TheCatcherInTheRye.jpg",
			pages: "214",
			available: "AVAILABLE",
			id: "004"
		},
		{
			title: "The Great Gatsby",
			author: "Fitzgerald, F. Scott",
			publisher: "Scribner, 2004",
			type: "Book",
			summary: "Jay Gatsby had once loved beautiful, spoiled Daisy Buchanan, then lost her to a rich boy. Now, mysteriously wealthy, he is ready to risk everything to woo her back. This is the definitive, textually accurate edition of a classic of twentieth-century literature, The Great Gatsby.",
			cover: "TheGreatGatsby.jpg",
			pages: "180",
			available: "DUE 04-29-20",
			id: "005"
		},
		{
			title: "The Lion, the Witch, and the Wardrobe",
			author: "Lewis, C. S.",
			publisher: "Harper, 2009",
			type: "Book",
			summary: "Four English school children find their way through the back of a wardrobe into the magic land of Narnia and assist Aslan, the golden lion, to triumph over the White Witch who has cursed the land with eternal winter.",
			cover: "TheLionTheWitchAndTheWardrobe.jpg",
			pages: "172",
			available: "AVAILABLE",
			id: "006"
		},
		{
			title: "Lord of the Flies",
			author: "Golding, William",
			publisher: "Penguin Books, 1999",
			type: "Book",
			summary: "Golding's aim to \"trace the defect of society back to the defect of human nature\" is elegantly pursued in this gripping adventure tale about a group of British schoolboys marooned on a tropical island. Alone in a world of uncharted possibilities, devoid of adult supervision or rules, the boys attempt to forge their own society, failing, however, in the face of terror, sin, and evil.",
			cover: "LordOfTheFlies.jpg",
			pages: "182",
			available: "DUE 05-01-20",
			id: "007"
		},
		{
			title: "Catch-22",
			author: "Heller, Joseph",
			publisher: "Simon & Schuster Paperbacks, 2011",
			type: "Book",
			summary: "Set in the closing months of World War II in an American bomber squadron off the coast of Italy, Catch-22 is the story of a bombardier named Yossarian who is frantic and furious because thousands of people he has never even met keep trying to kill him.",
			cover: "Catch22.jpg",
			pages: "523",
			available: "AVAILABLE",
			id: "008"
		},
		{
			title: "The Grapes of Wrath",
			author: "Steinbeck, John",
			publisher: "Penguin Books, 2006",
			type: "Book",
			summary: "Depicts the hardships and suffering endured by the Joads as they journey from Oklahoma to California during the Depression.",
			cover: "TheGrapesOfWrath.jpg",
			pages: "464",
			available: "AVAILABLE",
			id: "009"
		},
		{
			title: "Slaughterhouse-Five",
			author: "Vonnegut, Kurt",
			publisher: "Dial Press, 2009",
			type: "Book",
			summary: "Billy Pilgrim returns home from the Second World War only to be kidnapped by aliens from the planet Tralfamadore, who teach him that time is an eternal present.",
			cover: "SlaughterhouseFive.jpg",
			pages: "275",
			available: "DUE 05-07-20",
			id: "010"
		},
		{
			title: "Anne of Green Gables",
			author: "Montgomery, L. M.",
			publisher: "Puffin, 2008",
			type: "Book",
			summary: "Anne, an eleven-year-old orphan, is sent by mistake to live with a lonely, middle-aged brother and sister on a Prince Edward Island farm and proceeds to make an indelible impression on everyone around her.",
			cover: "AnneOfGreenGables.jpg",
			pages: "426",
			available: "AVAILABLE",
			id: "011"
		},
		{
			title: "Pride and Prejudice",
			author: "Austen, Jane",
			publisher: "Oxford University Press, 2008",
			type: "Book",
			summary: "With the arrival of eligible young men in their neighborhood, the lives of Mr. and Mrs. Bennet and their five daughters are turned inside out and upside down. Pride encounters prejudice, upward-mobility confronts social disdain, and quick-wittedness challenges sagacity, as misconceptions and hasty judgements lead to heartache and scandal, but eventually to true understanding, self-knowledge, and love.",
			cover: "PrideAndPrejudice.jpg",
			pages: "333",
			available: "DUE 05-02-20",
			id: "012"
		},
		{
			title: "The Adventures of Huckleberry Finn",
			author: "Twain, Mark",
			publisher: "Puffin, 2008",
			type: "Book",
			summary: "Eager to flee his drunken father and his confining life with Widow Douglas and Miss Watson, Huckleberry Finn sets off on a raft down the Mississippi river with his friend Tom Sawyer and a runaway slave, Jim, in tow. Highlights of their floating journey towards freedom include an encounter with a pair of comical swindlers.",
			cover: "TheAdventuresOfHuckleberryFinn.jpg",
			pages: "450",
			available: "AVAILABLE",
			id: "013"
		},
		{
			title: "The Sound and the Fury",
			author: "Faulkner, William",
			publisher: "Vintage Books, 1990",
			type: "Book",
			summary: "Retells the tragic times of the Compson family, including beautiful, rebellious Caddy; manchild Benjy; haunted, neurotic Quentin; Jason, the brutal cynic; and Dilsey, their Black servant.",
			cover: "TheSoundAndTheFury.jpg",
			pages: "326",
			available: "AVAILABLE",
			id: "014"
		},
		{
			title: "War and Peace",
			author: "Tolstoy, Leo",
			publisher: "Signet Classic, 2007",
			type: "Book",
			summary: "War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.",
			cover: "WarAndPeace.jpg",
			pages: "1,455",
			available: "AVAILABLE",
			id: "015"
		},
		{
			title: "Jane Eyre",
			author: "Bronte, Charlotte",
			publisher: "New American Library, 2008",
			type: "Book",
			summary: "An orphan girl who accepts employment as a governess finds herself involved in a family secret and in love with her employer.",
			cover: "JaneEyre.jpg",
			pages: "470",
			available: "DUE 05-03-20",
			id: "016"
		},
		{
			title: "Les Miserables",
			author: "Hugo, Victor",
			publisher: "Signet Classics, 2013",
			type: "Book",
			summary: "The story of Jean Valjean, the ex-convict who rises against all odds from galley slave to mayor, and the fanatical police inspector Javert who dedicates his life to recapturing him.",
			cover: "LesMiserables.jpg",
			pages: "1,468",
			available: "AVAILABLE",
			id: "017"
		},
		{
			title: "For Whom the Bell Tolls",
			author: "Hemingway, Ernest",
			publisher: "Scribner, 2019",
			type: "Book",
			summary: "Presented by Hemingway's grandson Seán Hemingway, with a personal foreword by the author's son Patrick Hemingway, this new enhanced Library Edition of Ernest Hemingway's masterpiece about an American in the Spanish Civil War features early drafts and supplementary material, including three previously uncollected short stories on war by one of the greatest writers on the subject in history.",
			cover: "ForWhomTheBellTolls.jpg",
			pages: "547",
			available: "AVAILABLE",
			id: "018"
		},
		{
			title: "Frankenstein",
			author: "Shelley, Mary",
			publisher: "Bantam Dell, 2003",
			type: "Book",
			summary: "The story of Dr. Frankenstein and the obsessive experiment that leads to the creation of a monstrous and deadly creature. ",
			cover: "Frankenstein.jpg",
			pages: "216",
			available: "DUE 04-30-20",
			id: "019"
		},
		{
			title: "Great Expectations",
			author: "Dickens, Charles",
			publisher: "Signet Classics, 2009",
			type: "Book",
			summary: "The orphaned Pip is serving as a blacksmith's apprentice when an unknown benefactor supplies the means for him to be educated in London as a gentleman of \"great expectations.\"",
			cover: "GreatExpectations.jpg",
			pages: "508",
			available: "AVAILABLE",
			id: "020"
		},
		{
			title: "Little Women",
			author: "Alcott, Louisa May",
			publisher: "Puffin Books, 2014",
			type: "Book",
			summary: "Chronicles the joys and sorrows of the four March sisters as they grow into young ladies in nineteenth-century New England. ",
			cover: "LittleWomen.jpg",
			pages: "777",
			available: "AVAILABLE",
			id: "021"
		},
		{
			title: "Treasure Island",
			author: "Stevenson, Robert Louis",
			publisher: "Penguin Books, 1999",
			type: "Book",
			summary: "While going through the possessions of a deceased guest who owed them money, the mistress of the inn and her son find a map that leads them to a pirate's treasure.",
			cover: "TreasureIsland.jpg",
			pages: "210",
			available: "DUE 05-04-20",
			id: "022"
		},
		{
			title: "The Count of Monte Cristo",
			author: "Dumas, Alexandre",
			publisher: "Oxford University Press, 2008",
			type: "Book",
			summary: "Wrongfully imprisoned for 14 years, Edmond Dantès escapes to the island of Monte Cristo. What awaits him there is a fortune in gold--and a new identity with which to pursue his revenge and redemption.",
			cover: "TheCountOfMonteCristo.jpg",
			pages: "1,108",
			available: "AVAILABLE",
			id: "023"
		},
		{
			title: "Dracula",
			author: "Stoker, Bram",
			publisher: "Signet Classics, 2007",
			type: "Book",
			summary: "The quintessential horror tale of the powerful, centuries-old vampire follows his bloodthirsty trail from the mountains of Central Europe to England, until the savvy Dr. Van Helsing comes up with a way to end his reign of terror.",
			cover: "Dracula.jpg",
			pages: "391",
			available: "AVAILABLE",
			id: "024"
		},
		{
			title: "The Hound of the Baskervilles",
			author: "Doyle, Arthur Conan",
			publisher: "Penguin, 2001",
			type: "Book",
			summary: "The \"luminous, ghostly, and spectral\" hound of family legend has been seen roaming the moors at night. Sir Charles Baskerville has recently died, and it appears that the new baronet, Sir Henry, has inherited not only the vast wealth and property of his family, but a terrible destiny. To this Holmes ominously observes, \"It's an ugly business, Watson, an ugly dangerous business and the more I see of it the less I like it.\"",
			cover: "TheHoundOfTheBaskervilles.jpg",
			pages: "195",
			available: "DUE 04-28-20",
			id: "025"
		},
		{
			title: "Twenty Thousand Leagues Under the Sea",
			author: "Verne, Jules",
			publisher: "Penguin Classics, 2017",
			type: "Book",
			summary: "Three men embark on an epic journey under the sea with the mysterious Captain Nemo aboard his submarine the Nautilus. Over the course of their fantastical voyage, they encounter the lost city of Atlantis, the South Pole and the corals of the Red Sea, and must battle countless adversaries both human and monstrous.",
			cover: "TwentyThousandLeaguesUnderTheSea.jpg",
			pages: "488",
			available: "AVAILABLE",
			id: "026"
		},
		{
			title: "Fahrenheit 451",
			author: "Bradbury, Ray",
			publisher: "Simon & Schuster Paperbacks, 2013",
			type: "Book",
			summary: "In a future totalitarian state where books are banned and destroyed by the government, Guy Montag, a fireman in charge of burning books, meets a revolutionary schoolteacher who dares to read and a girl who tells him of a past when people did not live in fear.",
			cover: "Fahrenheit451.jpg",
			pages: "249",
			available: "AVAILABLE",
			id: "027"
		},
		{
			title: "The Hitchhiker's Guide to the Galaxy",
			author: "Adams, Douglas",
			publisher: "Del Rey / Ballantine Books, 2005",
			type: "Book",
			summary: "After Earth is demolished to make way for a new hyperspatial expressway, Arthur Dent begins to hitch-hike through space.",
			cover: "TheHitchhikersGuideToTheGalaxy.jpg",
			pages: "216",
			available: "DUE 04-30-20",
			id: "028"
		},
		{
			title: "Dune",
			author: "Herbert, Frank",
			publisher: "Ace Books, 1990",
			type: "Book",
			summary: "This Hugo and Nebula Award winner tells the sweeping tale of a desert planet called Arrakis, the focus of an intricate power struggle in a byzantine interstellar empire. Dune is one of the most famous science fiction novels ever written, and deservedly so. The setting is elaborate and ornate, the plot labyrinthine, the adventures exciting.",
			cover: "Dune.jpg",
			pages: "535",
			available: "DUE 05-02-20",
			id: "029"
		},
		{
			title: "The Killer Angels",
			author: "Shaara, Michael",
			publisher: "Modern Library",
			type: "Book",
			summary: "Portraits of Lee, Longstreet, Pickett, Buford, Hancock, and other Civil War leaders are interwoven with historical detail to provide a fictional re-creation of the bloody battle at Gettysburg. A central figure in the book, however, is Col. Joshua Lawrence Chamberlain, whose 20th Maine regiment of volunteers held the Union's left flank on the second day of the battle. This unit's bravery at Little Round Top helped turned the tide of the war against the rebels. There are also plenty of maps, which convey a complete sense of what happened July 1-3, 1863.",
			cover: "TheKillerAngels.jpg",
			pages: "337",
			available: "AVAILABLE",
			id: "030"
		},
		{
			title: "Little Fires Everywhere",
			author: "Ng, Celeste",
			publisher: "Penguin Press, 2017",
			type: "Book",
			summary: "In Shaker Heights, a placid, progressive suburb of Cleveland, everything is planned - from the layout of the winding roads, to the colors of the houses, to the successful lives its residents will go on to lead. And no one embodies this spirit more than Elena Richardson, whose guiding principle is playing by the rules. Enter Mia Warren - an enigmatic artist and single mother - who arrives in this idyllic bubble with her teenaged daughter Pearl, and rents a house from the Richardsons. Soon Mia and Pearl become more than tenants: all four Richardson children are drawn to the mother-daughter pair. But Mia carries with her a mysterious past and a disregard for the status quo that threatens to upend this carefully ordered community. When old family friends of the Richardsons attempt to adopt a Chinese-American baby, a custody battle erupts that dramatically divides the town--and puts Mia and Elena on opposing sides. Suspicious of Mia and her motives, Elena is determined to uncover the secrets in Mia's past. But her obsession will come at unexpected and devastating costs. Little Fires Everywhere explores the weight of secrets, the nature of art and identity, and the ferocious pull of motherhood - and the danger of believing that following the rules can avert disaster.",
			cover: "LittleFiresEverywhere.jpg",
			pages: "338",
			available: "AVAILABLE",
			id: "031"
		},
		{
			title: "Where the Crawdads Sing",
			author: "Owens, Delia",
			publisher: "G.P. Putnam's Sons, 2018",
			type: "Book",
			summary: "Fans of Barbara Kingsolver will love this stunning debut novel from a New York Times bestselling nature writer, about an unforgettable young woman determined to make her way in the wilds of North Carolina, and the two men that will break her isolation open. For years, rumors of the \"Marsh Girl\" have haunted Barkley Cove, a quiet town on the North Carolina coast. She's barefoot and wild; unfit for polite society. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark. But Kya is not what they say. Abandoned at age ten, she has survived on her own in the marsh that she calls home. A born naturalist with just one day of school, she takes life lessons from the land, learning from the false signals of fireflies the real way of this world. But while she could have lived in solitude forever, the time comes when she yearns to be touched and loved. Drawn to two young men from town, who are each intrigued by her wild beauty, Kya opens herself to a new and startling world--until the unthinkable happens. In Where the Crawdads Sing, Owens juxtaposes an exquisite ode to the natural world against a heartbreaking coming of age story and a surprising murder investigation. Thought-provoking, wise, and deeply moving, Owens's debut novel reminds us that we are forever shaped by the children we once were, and that we are all subject to the beautiful and violent secrets that nature keeps",
			cover: "WhereTheCrawdadsSing.jpg",
			pages: "371",
			available: "DUE 05-05-20",
			id: "032"
		},
		{
			title: "Educated : a memoir",
			author: "Westover, Tara",
			publisher: "Random House, 2018",
			type: "Book",
			summary: "Tara Westover was seventeen the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her \"head-for-the-hills bag.\" In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard. Her father distrusted the medical establishment, so Tara never saw a doctor or nurse. Gashes and concussions, even burns from explosions, were all treated at home with herbalism. The family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when an older brother became violent. When another brother got himself into college and came back with news of the world beyond the mountain, Tara decided to try a new kind of life. She taught herself enough mathematics, grammar, and science to take the ACT and was admitted to Brigham Young University. There, she studied psychology, politics, philosophy, and history, learning for the first time about pivotal world events like the Holocaust and the Civil Rights Movement. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she'd traveled too far, if there was still a way home.",
			cover: "Educated.jpg",
			pages: "334",
			available: "AVAILABLE",
			id: "033"
		},
		{
			title: "Maybe You Should Talk to Someone",
			author: "Gottlieb, Lori",
			publisher: "Houghton Mifflin Harcourt, 2019",
			type: "Book",
			summary: "From a New York Times best-selling author, psychotherapist, and national advice columnist, a hilarious, thought-provoking, and surprising new book that takes us behind the scenes of a therapist's world--where her patients are looking for answers (and so is she)",
			cover: "MaybeYouShouldTalkToSomeone.jpg",
			pages: "415",
			available: "AVAILABLE",
			id: "034"
		},
		{
			title: "Atomic Habits",
			author: "Clear, James",
			publisher: "Avery, 2018",
			type: "Book",
			summary: "James Clear, an expert on habit formation, reveals practical strategies that will teach you how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. He draws on proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible.",
			cover: "AtomicHabits.jpg",
			pages: "306",
			available: "DUE 05-06-20",
			id: "035"
		},
		{
			title: "Daring Greatly",
			author: "Brown, Brene",
			publisher: "Avery, 2015",
			type: "Book",
			summary: "Based on twelve years of research, thought leader Dr. Brené Brown argues that vulnerability is not weakness, but rather our clearest path to courage, engagement, and meaningful connection.",
			cover: "DaringGreatly.jpg",
			pages: "303",
			available: "AVAILABLE",
			id: "036"
		},
		{
			title: "Just Mercy",
			author: "Stevenson, Bryan",
			publisher: "Spiegel & Grau, 2015",
			type: "Book",
			summary: "The founder of the Equal Justice Initiative in Montgomery, Alabama recounts his experiences as a lawyer working to assist those desperately in need, reflecting on his pursuit of the ideal of compassion in American justice.",
			cover: "JustMercy.jpg",
			pages: "349",
			available: "AVAILABLE",
			id: "037"
		},
		{
			title: "The Last Wish",
			author: "Sapkowski, Andrzej",
			publisher: "Orbit, 2017",
			type: "Book",
			summary: "Geralt of Rivia, a witcher, uses his vast sorcerous powers to hunt down the monsters that threaten the world, but he soon discovers that not every monstrous-looking creature is evil, and not everything beautiful is good. ",
			cover: "TheLastWish.jpg",
			pages: "344",
			available: "DUE 04-27-20",
			id: "038"
		},
		{
			title: "Eleanor Oliphant is Completely Fine",
			author: "Honeyman, Gail",
			publisher: "Pamela Dorman Books / Viking, 2017",
			type: "Book",
			summary: "Smart, warm, uplifting, the story of an out-of-the-ordinary heroine whose deadpan weirdness and unconscious wit make for an irresistible journey as she realizes the only way to survive is to open her heart. Meet Eleanor Oliphant: she struggles with appropriate social skills and tends to say exactly what she's thinking. That, combined with her unusual appearance (scarred cheek, tendency to wear the same clothes year in, year out), means that Eleanor has become a creature of habit (to say the least) and a bit of a loner. Nothing is missing in her carefully timetabled life of avoiding social interactions, where weekends are punctuated by frozen pizza, vodka, and phone chats with Mummy. But everything changes when Eleanor meets Raymond, the bumbling and deeply unhygienic IT guy from her office. When she and Raymond together save Sammy, an elderly gentleman who has fallen on the sidewalk, the three become the kind of friends who rescue each other from the lives of isolation they have each been living. And it is Raymond's big heart that will ultimately help Eleanor find the way to repair her own profoundly damaged one",
			cover: "EleanorOliphantIsCompletelyFine.jpg",
			pages: "327",
			available: "DUE 05-01-20",
			id: "039"
		},
		{
			title: "A Gentleman in Moscow",
			author: "Towles, Amor",
			publisher: "Viking, 2016",
			type: "Book",
			summary: "\"In all ways a great novel, a nonstop pleasure brimming with charm, personal wisdom, and philosophic insight.this book more than fulfills the promise of Towles' stylish debut, Rules of Civility.\"--Kirkus Reviews (starred) From the New York Times bestselling author of Rules of Civility--a transporting novel about a man who is ordered to spend the rest of his life inside a luxury hotel With his breakout debut novel, Rules of Civility, Amor Towles established himself as a master of absorbing, sophisticated fiction, bringing late 1930s Manhattan to life with splendid atmosphere and a flawless command of style. Readers and critics were enchanted; as NPR commented, \"Towles writes with grace and verve about the mores and manners of a society on the cusp of radical change.\" A Gentleman in Moscow immerses us in another elegantly drawn era with the story of Count Alexander Rostov. When, in 1922, he is deemed an unrepentant aristocrat by a Bolshevik tribunal, the count is sentenced to house arrest in the Metropol, a grand hotel across the street from the Kremlin. Rostov, an indomitable man of erudition and wit, has never worked a day in his life, and must now live in an attic room while some of the most tumultuous decades in Russian history are unfolding outside the hotel's doors. Unexpectedly, his reduced circumstances provide him a doorway into a much larger world of emotional discovery. Brimming with humor, a glittering cast of characters, and one beautifully rendered scene after another, this singular novel casts a spell as it relates the count's endeavor to gain a deeper understanding of what it means to be a man of purpose",
			cover: "AGentlemanInMoscow.jpg",
			pages: "462",
			available: "AVAILABLE",
			id: "040"
		},
		{
			title: "All the Light We Cannot See",
			author: "Doerr, Anthony",
			publisher: "Scribner, 2014",
			type: "Book",
			summary: "From the highly acclaimed, multiple award-winning Anthony Doerr, a stunningly ambitious and beautiful novel about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II. Marie Laure lives with her father in Paris within walking distance of the Museum of Natural History where he works as the master of the locks (there are thousands of locks in the museum). When she is six, she goes blind, and her father builds her a model of their neighborhood, every house, every manhole, so she can memorize it with her fingers and navigate the real streets with her feet and cane. When the Germans occupy Paris, father and daughter flee to Saint-Malo on the Brittany coast, where Marie-Laure's agoraphobic great uncle lives in a tall, narrow house by the sea wall. In another world in Germany, an orphan boy, Werner, grows up with his younger sister, Jutta, both enchanted by a crude radio Werner finds. He becomes a master at building and fixing radios, a talent that wins him a place at an elite and brutal military academy and, ultimately, makes him a highly specialized tracker of the Resistance. Werner travels through the heart of Hitler Youth to the far-flung outskirts of Russia, and finally into Saint-Malo, where his path converges with Marie-Laure.",
			cover: "AllTheLightWeCannotSee.jpeg",
			pages: "531",
			available: "AVAILABLE",
			id: "041"
		},
		{
			title: "Thinking, Fast and Slow",
			author: "Kahneman, Daniel",
			publisher: "Farrar, Straus and Giroux, 2011",
			type: "Book",
			summary: "Kahneman exposes the extraordinary capabilities and also the faults and biases of fast thinking, and the pervasive influence of intuitive impressions on peoples' thoughts and choices.",
			cover: "ThinkingFastAndSlow.jpeg",
			pages: "499",
			available: "DUE 04-30-20",
			id: "042"
		},
		{
			title: "The Way of Kings",
			author: "Sanderson, Brandon",
			publisher: "Tor, 2011",
			type: "Book",
			summary: "Introduces the world of Roshar through the experiences of a war-weary royal compelled by visions, a highborn youth condemned to military slavery, and a woman who is desperate to save her impoverished house.",
			cover: "TheWayOfKings.jpg",
			pages: "1,258",
			available: "DUE 05-08-20",
			id: "043"
		},
		{
			title: "Mistborn",
			author: "Sanderson, Brandon",
			publisher: "Tor, 2019",
			type: "Book",
			summary: "For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler's most hellish prison. Kelsier \"snapped\" and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark.",
			cover: "Mistborn.jpeg",
			pages: "647",
			available: "AVAILABLE",
			id: "044"
		},
		{
			title: "Digital Minimalism",
			author: "Newport, Cal",
			publisher: "Portfolio/Penguin, 2019",
			type: "Book",
			summary: "In this timely and enlightening book, the bestselling author of Deep Work introduces a philosophy for technology use that has already improved countless lives.",
			cover: "DigitalMinimalism.jpeg",
			pages: "284",
			available: "DUE 05-08-20",
			id: "045"
		},
		{
			title: "The Lies of Locke Lamora",
			author: "Lynch, Scott",
			publisher: "Del Rey, 2013",
			type: "Book",
			summary: "Vowing to bring down the crime boss running the city, a group of Gentlemen Bastards, led by Locke Lamora, sets out to beat the Capa at his own game, taking on other thieves, murderers, beggars, prostitutes, and thugs in the process.",
			cover: "TheLiesOfLockeLamora.jpeg",
			pages: "722",
			available: "AVAILABLE",
			id: "046"
		},
		{
			title: "Memories of Ice",
			author: "Erikson, Steven",
			publisher: "Tor, 2005",
			type: "Book",
			summary: "The ravaged continent of Genabackis has given birth to a terrifying new empire: the Pannion Domin. Like a tide of corrupted blood, it seethes across the land, devouring all. In its path stands an uneasy alliance: Onearm's army and Whiskeyjack's Bridgeburners alongside their enemies of old--the forces of the Warlord Caladan Brood, Anomander Rake and his Tiste Andii mages, and the Rhivi people of the plains. But ancient undead clans are also gathering; the T'lan Imass have risen. For it would seem something altogether darker and more malign threatens this world. Rumors abound that the Crippled God is now unchained and intent on a terrible revenge. Marking the return of many characters from \"Gardens of the Moon\" and introducing a host of remarkable new players, \"Memories of Ice\" is both a momentous new chapter in Steven Erikson's magnificent epic fantasy and a triumph of storytelling.",
			cover: "MemoriesOfIce.jpeg",
			pages: "781",
			available: "DUE 05-01-20",
			id: "047"
		},
		{
			title: "The Eye of the World",
			author: "Jordan, Robert",
			publisher: "Tor, 2012",
			type: "Book",
			summary: "In the Third Age, an age of prophecy when the world and time themselves hang in the balance, the Dark One, imprisoned by the Creator, is stirring in Shayol Ghul.",
			cover: "TheEyeOfTheWorld.jpeg",
			pages: "750",
			available: "AVAILABLE",
			id: "048"
		},
		{
			title: "A Game of Thrones",
			author: "Martin, George R. R.",
			publisher: "Bantam Books, 2005",
			type: "Book",
			summary: "A tale of court intrigues in the land of Seven Kingdoms, a country \"blessed by golden summers that go on for years, and cursed by cruel winters that can last a generation.\"",
			cover: "AGameOfThrones.jpeg",
			pages: "835",
			available: "AVAILABLE",
			id: "049"
		},
		{
			title: "Ender's Game",
			author: "Card, Orson Scott",
			publisher: "Tor, 2014",
			type: "Book",
			summary: "Once again, the Earth is under attack. An alien species is poised for a final assault. The survival of humanity depends on a military genius who can defeat the aliens. But who? Ender Wiggin is brilliant, ruthless, and cunning, a tactical and strategic master, and a child. Recruited for military training by the world government, Ender's childhood ends the moment he enters his new home: Battle School. How will Ender perform in real combat conditions? After all, Battle School is just a game. Isn't it?",
			cover: "EndersGame.jpeg",
			pages: "380",
			available: "AVAILABLE",
			id: "050"
		},
		{
			title: "Leviathan Wakes",
			author: "Corey, James S. A.",
			publisher: "Orbit / Hachette Book Group, 2011",
			type: "Book",
			summary: "Humanity has colonized the solar system -- Mars, the Moon, the Asteroid Belt and beyond -- but the stars are still out of our reach. Jim Holden is XO of an ice miner making runs from the rings of Saturn to the mining stations of the Belt. When he and his crew stumble upon a derelict ship, the Scopuli, they find themselves in possession of a secret they never wanted. A secret that someone is willing to kill for -- and kill on a scale unfathomable to Jim and his crew. War is brewing in the system unless he can find out who left the ship and why. Detective Miller is looking for a girl. One girl in a system of billions, but her parents have money and money talks. When the trail leads him to the Scopuli and rebel sympathizer Holden, he realizes that this girl may be the key to everything. Holden and Miller must thread the needle between the Earth government, the Outer Planet revolutionaries, and secretive corporations -- and the odds are against them. But out in the Belt, the rules are different, and one small ship can change the fate of the universe.",
			cover: "LeviathanWakes.jpeg",
			pages: "582",
			available: "AVAILABLE",
			id: "051"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "052"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "053"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "054"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "055"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "056"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "057"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "058"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "059"
		},
		{
			title: "",
			author: "",
			publisher: "",
			type: "Book",
			summary: "",
			cover: ".jpg",
			pages: "",
			available: "AVAILABLE",
			id: "060"
		},
	],
	lists: {
		"NewArrivals": {
			title: "New Arrivals",
			books: ["031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "045"]
		},
		"StaffPicks": {
			title: "Staff Picks",
			books: ["005", "007", "008", "010", "014", "030"]
		},
		"FantasySci": {
			title: "Fantasy / Sci-Fi",
			books: ["029", "038", "002", "003", "006", "027", "028", "043", "044", "046", "047", "048", "049", "050", "051"]
		},
		"Classics": {
			title: "Beloved Classics",
			books: ["001", "004", "009", "011", "012", "013", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026"]
		},
	},
	resources: [
		{
			title: "Access Our Digital Library",
			img: "DigitalLibrary.jpg"
		},
		{
			title: "Homework Assistance",
			img: "HomeworkAssistance.jpg"
		},
		{
			title: "Career & Employment",
			img: "CareerEmployment.jpg"
		},
		{
			title: "Computer Training",
			img: "ComputerTraining.jpg"
		},
	],
	events: [],
}

export default initialState;