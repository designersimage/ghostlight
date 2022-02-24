/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE DATA                            |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
export const pages = [
    {
        id: 1,
        slug: 'home',
        title: `Illuminating Possibilities with Performance Training.`,
        content: `<p>The <span class="current-year"></span> Ghost Light Schedule includes full-experience workshops in both Acting and Modeling for Introductory through Advanced levels utilizing Industry Insights to educate and prepare you for a successful career.</p>
                <a href="company/" class="about-link" data-nav="forward" title="About Ghost Light">Learn about Ghost Light</a>
                <a href="workshops/" class="workshop-link" data-nav="forward" title="See Workshops & Pricing">See workshops &amp; pricing &raquo;</a>
                <a href="company/offers.html" class="special-link" data-nav="forward" title="Special Offers">View <em>special offers</em> for students and community members, as well as scholorship opportunities.</a>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 2,
        slug: 'about',
        title: `About Our Company`,
        content: `<nav class="page-links">
                    <a href="team.html" data-nav="group-forward" title="Our Team">Our Team</a>
                    <a href="private_training.html" data-nav="group-forward" title="Private Training">Private Training</a>
                    <a href="showcases.html" data-nav="group-forward" title="Showcases">Showcases</a>
                    <a href="offers.html" data-nav="group-forward" title="Special Offers">Special Offers</a>
                    <a href="industry_services.html" data-nav="group-forward" title="Industry Services">Industry Services</a>
                    <a href="../community_partners/" data-nav="forward" title="Community Partners">Community Partners</a>
                </nav>
                <p>In the theatre world, a ghost light is left shining onstage when a theatre is not in use. It helps to enable those entering and 
                    exiting the dark performance space before the main lights have been turned on or after they have been shut off. The ghost light 
                    origin is shrouded in many superstitions, from stories of appeasing theatre ghosts to more practical explanations of avoiding 
                    pressure build up in gas lines before the advent of electricity, but the modern application is one of safety and guidance.</p>
                <p>In our journey of starting a training program for performers of all ages, types, and skill levels, the ghost light revealed itself 
                    as a comforting and universal symbol of what it is to be a performer. There is always a light on in the theatre. There is always 
                    energy in the space. There is always work to be done and discoveries to be made, even when the house is closed. For this reason, 
                    we chose to take this hauntingly appropriate image as our mascot.</p>
                <p>Through our training program, we seek to enrich, educate, and prepare performers to further their artistic endeavors and careers by 
                    offering training, management, and the tools to succeed in the professional industry. We strive to create a foundation of freedom 
                    and discipline, fun and instruction, emotional safety and artistic daring, an environment that reflects the nature of the 
                    entertainment industry itself. We hope to develop actors and models who not only shine when the show is in full swing, but also 
                    keep their light ablaze when preparing quietly on their own for that next big performance.</p>
                <p>We are Ghost Light Performance, Inc. Let us help to guide you through the dark.</p>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 3,
        slug: 'contact',
        title: `Contact Us`,
        content: `<nav class="page-links">
                    <a href="team.html" data-nav="group-forward" title="Our Team">Our Team</a>
                    <a href="private_training.html" data-nav="group-forward" title="Private Training">Private Training</a>
                    <a href="showcases.html" data-nav="group-forward" title="Showcases">Showcases</a>
                    <a href="offers.html" data-nav="group-forward" title="Special Offers">Special Offers</a>
                    <a href="industry_services.html" data-nav="group-forward" title="Industry Services">Industry Services</a>
                    <a href="../community_partners/" data-nav="forward" title="Community Partners">Community Partners</a>
                </nav>
                <form method="post" class="contact-form" action="./contact.html">
                    <div class="left">
                        <label for="contact-name">Full Name</label>
                        <input type="text" name="contact-name" id="contact-name" required>
                        <label for="contact-phone">Phone Number</label>
                        <input type="tel" name="contact-phone" id="contact-phone">
                        <label for="contact-email">Email Address</label>
                        <input type="email" name="contact-email" id="contact-email" required>
                    </div>
                    <div class="right">
                        <label for="contact-interest">I'm interested in...</label>
                        <select name="contact-interest" id="contact-interest">
                            <option value="audition">Auditioning</option>
                            <option value="presentation">Scheduling a Presentation</option>
                            <option value="partner">Becoming a Community Partner</option>
                            <option value="workshop">2-Day Intensive Workshops</option>
                            <option value="private">Receiving Private Training</option>
                            <option value="scholarship">Applying for a Scholarship</option>
                            <option value="rent">Renting Rehearsal Space</option>
                            <option value="casting">Casting Performers</option>
                            <option value="general" selected>General Question/Comment</option>
                        </select>
                        <label for="contact-comment">Question/Comment</label>
                        <textarea name="contact-comment" id="contact-comment" rows="6"></textarea>
                        <button type="submit" name="contact-submit" id="contact-submit">Submit</button>
                    </div>
                </form>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 4,
        slug: 'team',
        title: `Our Team`,
        content: `<nav class="page-links">
                    <a href="./" data-nav="group-back" class="company__back-link" title="Go Back">« Back</a>
                </nav>
                <p><strong>Mission Statement:</strong> To enrich, educate, and prepare performers to further their artistic endeavors and careers by offering
                training, management, and the tools to succeed in the professional industry.</p>
                <div id="team"></div>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 5,
        slug: 'bio',
        title: `[bio_name]`,
        content: `<div id="page-links">
                    <a href="team.html" data-nav="group-back" class="company__back-link" title="Back to Team">« Back to Team</a>
                </div>
                <div id="bio-content"></div>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 6,
        slug: 'private-training',
        title: `Private Training`,
        content: `<nav class="page-links">
                    <a href="./" data-nav="group-back" class="company__back-link" title="Go Back">« Back</a>
                </nav>
                <p>For the performer desiring additional instruction, Ghost Light offers the opportunity to meet 
                    with an experienced acting or modeling coach on an individual basis. Whether the performer is 
                    looking to develop an aspect of his or her craft or seeking to work on a particular piece, our 
                    coaches are available to give the individually catered Private Coaching each performer requires.
                </p>
                <p>Situations in which Private Coaching may be beneficial:</p>
                <ul>
                    <li>Preparing for an audition.</li>
                    <li>Filming a video audition.</li>
                    <li>Working on a specific set of skills you wish to strengthen (posture in runway walk, creating a dynamic character, etc.)</li>
                    <li>Getting an outside eye on new material you may be working on.</li>
                </ul>
                <p>Any material currently in use for a class or performance in which you are working with a particular 
                    instructor or director is not acceptable for use in Private Coaching. Ghost Light respects our local 
                    professionals and will politely decline to work on any material that is currently under another's direction.
                </p>
                <p>Interested in private training? <a href="contact.html?ref=private-training" data-nav="group-forward" title="Interested in Private Training">Click Here</a></p>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 7,
        slug: 'showcases',
        title: `Showcases`,
        content: `<nav class="page-links">
                    <a href="./" data-nav="group-back" class="company__back-link" title="Go Back">« Back</a>
                </nav>
                <p>Ghost Light Performance Showcases offer a chance for our workshop attendees to perform in front of an audience of friends, 
                    family, and fellow performers, as well as local professionals and our Ghost Light Community Partners. Providing the 
                    opportunity to not only demonstrate one's acquired skills but to also network with others in the performing arts community, 
                    Ghost Light Performance Showcases are a valuable asset for actors and models of all skill levels.
                </p>
                <p>Showcases coincide with the schedules of our workshop series and are held quarterly. Our next Performance Showcase will take place December <span class="current-year"></span>.</p>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 8,
        slug: 'offers',
        title: `Special Offers`,
        content: `<nav class="page-links">
                    <a href="./" data-nav="group-back" class="company__back-link" title="Go Back">« Back</a>
                </nav>
                <p>Ghost Light Performance gladly offers tuition discounts and price breaks under certain circumstances. Our Current Special Offers include:</p>
                <ul>
                    <li>10% discount for current college/university students</li>
                    <li>10% discount for active military and verteran performers</li>
                    <li>$100 off of each workshop series purchased in a bundle of two or more</li>
                </ul>
                <p>Payment plans as well as limited Full and Partial Scholarship opportunities are also available.</p>
                <p>Interested in applying for a scholarship? <a href="contact.html?ref=scholarship" data-nav="group-forward" title="Apply for a Scholarship">Click Here</a></p>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    },
    {
        id: 9,
        slug: 'industry-services',
        title: `Industry Services`,
        content: `<nav class="page-links">
                    <a href="./" data-nav="group-back" class="company__back-link" title="Go Back">« Back</a>
                </nav>
                <p>At Ghost Light Performance, Inc., we believe that having the right tools is just as important as having the right 
                    training when it comes to building a successful acting or modeling career. For this reason, we emphasize the inclusion 
                    of Headshots and Portfolio Pictures, Video Reels and Comp Cards, Resume Creation and Interview Training in our workshop 
                    series. Each series will help to contribute not only the performer's artistic abilities but also to his or her business 
                    savvy and accumulated evidence of work. These tools are vital when auditioning, networking, and seeking representation. 
                    We strive to prepare our performers to shine both on stage and on the business end of the industry. Please see the 
                    individual workshop series for which tools each includes.
                </p>
                <ul>
                    <li><strong>Headshots:</strong> A headshot is an 8"x10" picture of an actor or model's face, particularly one expressing 
                        character and personality. Headshots should be dynamic and engaging to the professionals to whom they will be submitted 
                        and capable of grabbing the attention of an agent, manager, or casting director. Typically these pictures are from 
                        shoulders up only, as the name implies.
                    </li>
                    <li><strong>Portfolio:</strong> A portfolio is a collection of images displaying the very best of a model's print work. 
                        It should contain between six and twenty pictures in a variety of styles and poses demonstrating the model's personality, 
                        versatility, and strengths. The sizes of a portfolio should be between 8"x10" and 9"x14", depending on the specific market.
                    </li>
                    <li><strong>Reel:</strong> An actor's reel is a video, no more than three minutes in length, that shows his or her experience 
                        in film. It includes one to five scenes of varied lengths and acting ranges, and sometimes includes a montage of thirty 
                        seconds or less. It is designed to showcase an actor's talent as well as encourage an agent, manager, or director to sign, 
                        cast, or hire the performer.
                    </li>
                    <li><strong>Comp Card:</strong> Short for "composite card," a comp card is an 8.5"x5.5" presentation of the newest and best 
                        images an actor or model has available, typically including a large headshot on one side and three to five smaller images 
                        on the reverse. The comp card is valuable in showing a performer's range by presenting an agent, manager, or casting 
                        director with a variety of looks and styles.
                    </li>
                </ul>
                <p>Interested in our industry services? <a href="contact.html?ref=general" data-nav="group-forward" title="Interested in Industry Services">Click Here</a></p>
                <p class="footer-info">Ghost Light Performance Inc. &copy; <span class="current-year"></span></p>`
    }
]

export const team = [
    {
        id: 1,
        name: 'Jonathan Wheeler',
        title: 'Marketing & Recruiting',
        headshot: 'headshot_wheeler.jpg',
        bio: `Jonathan Wheeler was born and raised in Fresno, CA. He has performed for various companies all over the valley. His stage works include working with companies such as, GCP (Roger Rocka's & 2nd Space), Childrens Musical Theatreworks, Woodward Park Shakespeare Fesitival, Rouge Festival, River City Theater Company (Reedley), Visalia Players as well as various universities and other schools.\nIn film, Jonathan has made an appearance in a few commercials. Most notably in a Me 'n' Ed's commercial and recently in a BMW of Visalia commercial. He has also made appearances in other short films and local movies.\nJonathan has many years of experience working with internet marketing techniques as well as the programming and design of websites. As a free-lance designer he has had the opportunity to work with such companies as, Warnor Theater, Arise Solar, Kings River Life Magazine, Club Rome and The Talent Shop.`
    },
    {
        id: 2,
        name: 'Jacquelyn Babb',
        title: 'Program Director',
        headshot: 'headshot_babb.jpg',
        bio: `Jacque Babb is a Fresno born-and-raised actor, model, and photographer.\nBabb obtained her B.A. in Acting from California State University, Fresno and has participated in a variety of workshops and classes on specific disciplines in the art, including Musical Theatre, Movement, Dance, Voice, and Chekhov Technique. She has performed theatrically in Fresno with University Theatre at CSU Fresno, Fresno City College's Theatre Department, The Good Company Players, Woodward Shakespeare Festival, and Children's Musical Theatreworks. She has also performed professionally with Santa Rosa's Summer Repertory Theatre and Chillicothe, Ohio's Scioto Society. In addition to theatrical productions, Babb has acted in a handful of student and independent short films. She has been working as a professional acting coach for the past year in both workshop and private settings, additionally playing the managerial role in developing curriculum and supervising the training program as a whole.\nIn front of the camera, Babb has worked mainly as a hair and face model, working with a good number of Los Angeles and Fresno studios and photographers. Her experience as both a model and actor is what led her to opening her own photography company, Babble.Lens Photography, which focuses on portrait photography with an emphasis in headshots and portfolio work.\nPresently, Babb's performance endeavors are mainly musical. She is also a singer-songwriter who performs locally and in August of 2014 released her debut EP "Part One: The Tangle and Crash" under the moniker B e d e D o n i a.`
    },
    {
        id: 3,
        name: 'Brandon Yang',
        title: 'Modeling Coach',
        headshot: 'headshot_yang.jpg',
        bio: `Brandon Yang was born and raised in Fresno, California to Chu Ning Yang and Kay Xiong. He is also the grandson of the Yang clan leader, Lee Chao Yang. Holding his family's title in honoring and obeying their rules within the Hmong culture has truly held his leadership role. Coming from a tribal group, “HMONG,” his family has come a long way from Laos into America. There are only 18 clan groups within the Hmong community, where many have branched out to Minnesota, North Carolina, France, Sacramento, and Fresno just to name a few. Fresno was where a majority of his relatives and family resided after the Vietnam War. Life in Fresno was quite a challenging path for his family and him, but they managed to get through with the help of succeeding in education and talent. Yang is currently attending CSU, Fresno getting his degree in Fashion Merchandising and getting a minor in Theatre Arts: Drama.\nFashion has always been with Yang. When he was 4 years old, he would cut his sister's clothes that she did not want anymore and pin them on the dolls. The dolls were like his dress forms, where he would style them in multiple fabrics. Growing up, you will always get an idea of what you wish to pursue as a career and start experimenting with it. Today, Yang is living his dream as a fashion designer working with clients and doing fashion shows. He did not start sewing until late September of 2011. Yang created a mini hunter-green dress for a friend of his for her 19th birthday. From that weekend, Yang knew that he was capable of designing and constructing garments.\nSome designers go to a design school for the training, but Yang is a self-taught designer from scratch behind production. With the help of his dress form, he would geometrically measure and estimate how much fabric he would need to make the top and bottom. His first collection was showcased on April 28, 2012 with Fashion Inc.'s 2nd Annual Fashion Show, “Hollywood Vintage.” Later in the year, he participated with “Revived Fashion Show,” at the Hmong International New Year. His most recent shows were all in April of 2013, where he participated in San Francisco's “iCu Fashion Show/ Networking Industry,” “Trashique” at the Fresno Art Museum, Fashion Inc.'s 3rd Annual Fashion Show, “Once Upon a Spring,” Hmong Music Festival's “Sew Into the Beat,” Fely Tchaco's “Modern Ethnic in the Spotlight Fashion Show” in San Francisco, and also showcased his first menswear collection at the Revived 3 Fashion Show at The Grand in Downtown Fresno.\nAs far as theatre arts and entertainment goes, Yang has performed in Roger Rocka's Dinner Theatre in shows such as “The Drowsy Chaperone” (2011) - Ensemble, “The King and I” (2014) - Prince Chululongkorn, and “West Side Story” (2014) - Luis. Yang is currently signed with All American Rascals Talent Agency in Southern California and is currently SAG (Screen Actors Guild) eligible. In the summer of 2013, Yang booked his first job as a featured dancer on ABC Family's “Pretty Little Liars,” season 4 episode 11. A month later, he booked another job with Nickelodeon's “The Thundermans,” season 1 episode 7 also as a featured dancer.\nYang's biggest influence would have to be his mother and aunt. Growing up in a very traditional family, Yang has always wanted to make his family proud of his accomplishments. His mother gave him the basics of sewing. She is an extremely hard worker and does not stop what she is doing until she finishes. Yang's aunt is a powerful woman who always believed in her words and in Yang. Her message to Yang was, “Great accomplishments come to those who put a lot of effort and dedication into their work.” His main logo design is, “BY Design,” which stands for “Be Youthful, Be Yourself, by Brandon Yang.” It stands for you as an individual wearing what you want and feel. There is nothing wrong with who you are or what you wear, because it represents the power of who you are.\nAside from coaching modeling/ runway, Yang enjoys keeping up to date with fashion, browsing through the internet, eating, shopping, traveling, networking, trying to make time for his friends and family, and trying to get most of his sleep in with his chaotic schedule.`
    }
]

export const workshops = [
    {
        id: 1,
        title: 'Intro to Performance',
        subtitle: 'Acting & Modeling',
        pitch: `New performers will develop basic techniques in commercial acting and modeling, sharpen important practical skills in auditioning and interviewing, and learn how to present themselves as professionals throughout the performance process.`,
        description: `The Introductory Workshop Series is designed with the new performer in mind. With a curriculum consisting of basic skills in both modeling and commercial acting, the Introductory workshops cover a variety of topics important to the performer's development in the creative, business, and practical aspects of the arts. This workshop series will provide the new performer with a solid and vitally important foundation from which to grow.`,
        scheduleIntro: `Intro to Performance is an eight week workshop series culminating in a showcase performance. Listed below are the topics of each workshop, Ghost Light’s own “Industry Insights.”`,
        scheduleList: [
                'Welcome Workshop', 
                'Preparation and Memorization', 
                'Headshots and Resume', 
                'Professionalism', 
                'Camera Personality', 
                'Runway/Commercial Techniques', 
                'Audition and Interview Skills', 
                'Final Dress', 
                'Ghost Light Performance Showcase'
        ],
        closeTag: `After mastering these concepts, we encourage our performers to explore our progressive acting and modeling series. <a href="./" class="group-back" title="View Workshops">Click Here</a> for our complete list of workshops provided.`,
        benefitValue: {
            benefits: [
                {
                    benefit: '24 Hours of Instruction',
                    listItems: [
                        {
                            item: '$60 / Hour',
                            cost: ''
                        }
                    ],
                    benefitCost: '$1440'
                },
                {
                    benefit: 'Acting Tools Starter',
                    listItems: [
                        {
                            item: 'Headshot Photoshoot',
                            cost: '$200'
                        },
                        {
                            item: 'Video of Commercial',
                            cost: '$100'
                        }
                    ],
                    benefitCost: ''
                },
                {
                    benefit: 'Modeling Tools Starter',
                    listItems: [
                        {
                            item: 'Comp Card',
                            cost: '$100'
                        },
                        {
                            item: '3 Portfolio Photos',
                            cost: '$250'
                        }
                    ],
                    benefitCost: ''
                },
                {
                    benefit: 'Showcase',
                    listItems: [
                        {
                            item: '2 Comps Included',
                            cost: ''
                        }
                    ],
                    benefitCost: '$30'
                }
            ],
            standardTotal: '$2,120',
            glpTotal: '$1,500'
        }
    },
    {
        id: 2,
        title: 'Beginning Workshop',
        subtitle: 'Acting',
        pitch: `The Beginning Acting Series will provide the performer with the basic foundation required for analyzing scripts and approaching character study by utilizing monologues, a vital tool for auditioning, in coordination with The "ROOTS" of Acting.`,
        description: `For the actor, monologues are a staple in the audition process. For this reason we have designed our Beginning Acting Series to give actors a more in-depth understanding of script analysis and character study by utilizing this very important tool. Throughout the workshops, actors will learn how to best memorize, dissect, and perform a monologue by using The "ROOTS" of Acting, the foundation of analysis for every monologue, scene, film, or play in which the actor will perform now and in the future. By the culmination of the workshops, the actor will also understand how to pick the perfect monologue, allowing the actor to take the audition process into his or her own hands.`,
        scheduleIntro: `Beginning Acting is a six week workshop series culminating in a showcase performance. Listed below are the topics of each workshop, Ghost Light’s own “Industry Insights.”`,
        scheduleList: [
                'Getting the Words Down', 
                'The Roots of Acting', 
                'Acting without “Acting”', 
                'Be Heard, Be Understood', 
                'The Hunt for Monologues', 
                'Workshop till you Drop', 
                'Ghost Light Performance Showcase'
        ],
        closeTag: `After mastering these concepts, we encourage our performers to explore our progressive acting and modeling series. <a href="./" class="group-back" title="View Workshops>Click Here</a> for our complete list of workshops provided.`,
        benefitValue: {
            benefits: [
                {
                    benefit: '15 Hours of Instruction',
                    listItems: [
                        {
                            item: '$60 / Hour',
                            cost: ''
                        }
                    ],
                    benefitCost: '$900'
                },
                {
                    benefit: 'Acting Tools',
                    listItems: [
                        {
                            item: 'Film Shoot',
                            cost: ''
                        },
                        {
                            item: 'Video of Monologue toward Reel',
                            cost: ''
                        }
                    ],
                    benefitCost: '$250'
                },
                {
                    benefit: 'Showcase',
                    listItems: [
                        {
                            item: '2 Comps Included',
                            cost: ''
                        }
                    ],
                    benefitCost: '$30'
                }
            ],
            standardTotal: '$1,180',
            glpTotal: '$800'
        }
    },
    {
        id: 3,
        title: 'Beginning Workshop',
        subtitle: 'Modeling',
        pitch: `Models will learn the next level of runway techniques and photo posing as individual models, and they will also learn how to pose with props and how to best show their physical features.`,
        description: `The Beginning Modeling Series serves to aid models in the first steps of their careers by providing better understanding and application of runway techniques and photo posing procedures. On the runway, models will address balance, posture, and turns, learning to exude poise and confidence. By working with a Ghost Light photographer in an individual shoot, they will discover the benefits of creativity and levels in posing, as well as exploring the use of props in a shoot. Camera and video recordings will be used to help the model develop his or her craft, and each model will leave the workshop with two pictures to add to their modeling portfolio.`,
        scheduleIntro: `Beginning Modeling is a six week workshop series culminating in a showcase performance. Listed below are the topics of each workshop, Ghost Light’s own “Industry Insights.”`,
        scheduleList: [
                'Balance, Rhythm, and Posture', 
                'Basic Runway Turns and Techniques', 
                'Finding your Best Features and Focus Point', 
                'Creativity in Posing', 
                'Posing with Props', 
                'Photoshoot Day', 
                'Ghost Light Performance Showcase'
        ],
        closeTag: `After mastering these concepts, we encourage our performers to explore our progressive acting and modeling series. <a href="./" class="group-back" title="View Workshops>Click Here</a> for our complete list of workshops provided.`,
        benefitValue: {
            benefits: [
                {
                    benefit: '15 Hours of Instruction',
                    listItems: [
                        {
                            item: '$60 / Hour',
                            cost: ''
                        }
                    ],
                    benefitCost: '$900'
                },
                {
                    benefit: 'Modeling Tools',
                    listItems: [
                        {
                            item: 'Photoshoot',
                            cost: ''
                        },
                        {
                            item: '2 Portfolio Photos\n<em>1 Print Ea. / 1 Digital Ea.</em>',
                            cost: ''
                        }
                    ],
                    benefitCost: '$200'
                },
                {
                    benefit: 'Showcase',
                    listItems: [
                        {
                            item: '2 Comps Included',
                            cost: ''
                        }
                    ],
                    benefitCost: '$30'
                }
            ],
            standardTotal: '$1,130',
            glpTotal: '$800'
        }
    },
    {
        id: 4,
        title: 'Intermediate Workshop',
        subtitle: 'Acting',
        pitch: `By offering actors the opportunity to prepare and perform a two-person scene, the Intermediate Acting Series explores topics in both the craft of acting as well as the practical skills of cooperating artistically with another performer.`,
        description: `The Intermediate Acting Series is geared toward strengthening and deepening the actor's understanding of the craft by working with a partner on a two-person scene. The Intermediate course does require additional outside work between scene partners, and is therefore designed not only to enhance the performer's artistic skills, but to also develop his or her confidence in cooperating with another performer.`,
        scheduleIntro: `Intermediate Acting is a six week workshop series culminating in a showcase performance. Listed below are the topics of each workshop, Ghost Light's own “Industry Insights.”`,
        scheduleList: [
                'Topics in Scene Study', 
                'Character Transformation', 
                'Blocking', 
                'Acting and Reacting', 
                'Adding in Actions', 
                'Workshop till you Drop', 
                'Ghost Light Performance Showcase'
        ],
        closeTag: `After mastering these concepts, we encourage our performers to explore our progressive acting and modeling series. <a href="./" class="group-back" title="View Workshops>Click Here</a> for our complete list of workshops provided.`,
        benefitValue: {
            benefits: [
                {
                    benefit: '15 Hours of Instruction',
                    listItems: [
                        {
                            item: '$60 / Hour',
                            cost: ''
                        }
                    ],
                    benefitCost: '$900'
                },
                {
                    benefit: 'Acting Tools',
                    listItems: [
                        {
                            item: 'Film Shoot',
                            cost: ''
                        },
                        {
                            item: 'Video of Scene toward Reel',
                            cost: ''
                        }
                    ],
                    benefitCost: '$350'
                },
                {
                    benefit: 'Showcase',
                    listItems: [
                        {
                            item: '2 Comps Included',
                            cost: ''
                        }
                    ],
                    benefitCost: '$30'
                }
            ],
            standardTotal: '$1,280',
            glpTotal: '$900'
        }
    },
    {
        id: 5,
        title: 'Intermediate Workshop',
        subtitle: 'Modeling',
        pitch: `Models will further explore their balance and posture while discovering the importance of spatial awareness and trust in cooperative works with fellow models.`,
        description: `For those who have obtained a solid grasp on solo modeling, we offer the Intermediate Modeling Series, which will further the performers' skills by incorporating partners both on the runway and in front of the camera. Models will further explore their balance and posture while also discovering the importance of spatial awareness and trust in cooperative works. The workshop series will culminate in a shoot which will provide the model with two partnered pictures to add to their modeling portfolio.`,
        scheduleIntro: `Intermediate Modeling is a six week workshop series culminating in a showcase performance. Listed below are the topics of each workshop, Ghost Light's own “Industry Insights.”`,
        scheduleList: [
                'Understanding Music & Timing', 
                'Partnering on the Runway', 
                'Hygiene, Model Handbag, Spatial Awareness & Trust', 
                'Photo posing with Partner', 
                'Balance & Half Turns', 
                'Partner & Props Photoshoot Day', 
                'Ghost Light Performance Showcase'
        ],
        closeTag: `After mastering these concepts, we encourage our performers to explore our progressive acting and modeling series. <a href="./" class="group-back" title="View Workshops>Click Here</a> for our complete list of workshops provided.`,
        benefitValue: {
            benefits: [
                {
                    benefit: '15 Hours of Instruction',
                    listItems: [
                        {
                            item: '$60 / Hour',
                            cost: ''
                        }
                    ],
                    benefitCost: '$900'
                },
                {
                    benefit: 'Modeling Tools',
                    listItems: [
                        {
                            item: 'Photoshoot',
                            cost: ''
                        },
                        {
                            item: '2 Portfolio Photos\n<em>1 Print Ea. / 1 Digital Ea.</em>',
                            cost: ''
                        }
                    ],
                    benefitCost: '$200'
                },
                {
                    benefit: 'Showcase',
                    listItems: [
                        {
                            item: '2 Comps Included',
                            cost: ''
                        }
                    ],
                    benefitCost: '$30'
                }
            ],
            standardTotal: '$1,130',
            glpTotal: '$800'
        }
    },
    {
        id: 6,
        title: 'Advanced Workshop',
        subtitle: 'Acting',
        pitch: `Giving actors the opportunity to perform in a small cast, one-act play, the Advanced Acting Series offers the actor the experience of working with an ensemble while addressing advanced performance topics.`,
        description: `The Advanced Acting Series gives actors the opportunity to be involved in a short performance, roughly ten to twenty minutes long. Utilizing one-act plays with small casts of at least three performers, this series delves into what it requires to create an ensemble piece with a fresh and exciting energy from the first to the last performance. Outside work with cast mates may be required for this workshop series.`,
        scheduleIntro: `Advanced Acting is a four week workshop series meeting twice weekly and culminating in an advanced showcase performance. Listed below are the topics of each workshop, Ghost Light's own “Industry Insights.”`,
        scheduleList: [
                'Preparing for Rehearsal/Performance', 
                'The Etiquette of Taking Direction', 
                'Character Transformation', 
                '“The First Time, Every Time”', 
                'Creating an Environment', 
                'Acting vs Emoting', 
                'Ghost Light Advanced Showcase'
        ],
        closeTag: `After mastering these concepts, we encourage our performers to explore our 2-day Intensives and Private Coaching. <a href="./" class="group-back" title="View Workshops>Click Here</a> for our complete list of workshops provided.`,
        benefitValue: {
            benefits: [
                {
                    benefit: '20 Hours of Instruction',
                    listItems: [
                        {
                            item: '$60 / Hour',
                            cost: ''
                        }
                    ],
                    benefitCost: '$1,200'
                },
                {
                    benefit: 'Acting Tools',
                    listItems: [
                        {
                            item: 'Video of One Act Performance',
                            cost: ''
                        },
                        {
                            item: 'Edited Reel of All Performances',
                            cost: ''
                        }
                    ],
                    benefitCost: '$550'
                },
                {
                    benefit: 'Advanced Performance Showcase',
                    listItems: [
                        {
                            item: '2 Comps Included',
                            cost: ''
                        }
                    ],
                    benefitCost: '$30'
                }
            ],
            standardTotal: '$1,780',
            glpTotal: '$1,200'
        }
    },
    {
        id: 7,
        title: 'Advanced Workshop',
        subtitle: 'Modeling',
        pitch: `Technically sound, experienced models will receive practical industry information while broadening their modeling skills in the realms of pageant and showcase runway styles and group posing for the camera.`,
        description: `The Advanced Modeling Series will prepare the technically sound and experienced model for the professional world with practical and industry related tips. In addition to beauty and fitness regimens and information on what items to have on hand on the job, this series will introduce both pageant and showcase runway styles and explore visual storytelling by means of a culminating group photoshoot. Models involved in this advanced series will leave with three pictures from this shoot to add to their modeling portfolio.`,
        scheduleIntro: `Advanced Modeling is a four week workshop series meeting twice weekly and culminating in an advanced showcase performance. Listed below are the topics of each workshop, Ghost Light's own “Industry Insights.”`,
        scheduleList: [
                'Balance and Full Turns', 
                'Beauty, Nutrient, and Fitness', 
                'Fashion, Pageant, and Showcase Walks', 
                'Visual Storytelling', 
                'Tools for Auditions', 
                '3 Group Photoshoot Days',
                ['Commercial', 'Fashion', 'Editorial'], 
                'Advanced Fashion Showcase'
        ],
        closeTag: `After mastering these concepts, we encourage our performers to explore our 2-day Intensives and Private Coaching. <a href="./" class="group-back" title="View Workshops>Click Here</a> for our complete list of workshops provided.`,
        benefitValue: {
            benefits: [
                {
                    benefit: '20 Hours of Instruction',
                    listItems: [
                        {
                            item: '$60 / Hour',
                            cost: ''
                        }
                    ],
                    benefitCost: '$1,200'
                },
                {
                    benefit: 'Modeling Tools',
                    listItems: [
                        {
                            item: 'Photoshoot',
                            cost: ''
                        },
                        {
                            item: '3 Portfolio Photos\n<em>1 Print Ea. / 1 Digital Ea.</em>',
                            cost: ''
                        },
                        {
                            item: 'Personalized Full Portfolio\n<em>+ 20 Prints of Comp Card</em>',
                            cost: ''
                        }
                    ],
                    benefitCost: '$550'
                },
                {
                    benefit: 'Advanced Fashion Showcase',
                    listItems: [
                        {
                            item: '2 Comps Included',
                            cost: ''
                        }
                    ],
                    benefitCost: '$30'
                }
            ],
            standardTotal: '$1,780',
            glpTotal: '$1,200'
        }
    }
]

export const users = [
    {
        id: 1,
        username: 'admin',
        password: 'Password',
        info: {
            name: 'Admin User',
            email: 'someone@website.com'
        }
    }
]