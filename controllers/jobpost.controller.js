const Jobpost = require('../models/jobpost.model');

exports.create = function (req, res) {
    let jobpost1 = new Jobpost(
        {
            company_name: "Telus",
            description: "Telus is the leading company for things",
            job_title: "Software Engineer",
            location: "4580 W 10th Ave, Vancouver, BC V6R 4C5",
            lat: 49.269758,
            lng: -123.241516,
            company_url: "telus.com",
            listing_url: "indeed.ca",
            date_posted: new Date,
            date_applied: null,
            stage: "Not applied",
            email: "recruit@telus.com",
            phone: 1111111111,
        }
    )
    let jobpost2 = new Jobpost(
        {
                company_name: "UBC",
                job_title: "Web Developer",
                description:"", 
                location: "UBC, Vancouver, British Columbia, Canada",
                lat: 49.265189, 
                lng: -123.243802,
                description:"Looking for several web developers with embedded design experience for a well-established electronics Hi Tech developer and manufacturer located on Annacis Island, Delta in the area of Smart City and Intelligent Transportation System design. You will be working with other designers and technicians experienced in our current systems. Looking for a self-starter that can work independently and with a team. One or more candidates may be offered full time positions depending on performance.", 
                company_url: "www.ubc.ca",
                listing_url: "www.ubc.ca/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "Applied",
                email: "hr@ubc.ca",
                phone: 6048222211   
            }
    )
    let jobpost3 = new Jobpost(
        {
                company_name: "The Bristol",
                job_title: "Web Developer", 
                description:"Our clients are start-ups with funding. Projects involve initial design and development or improvement and enhancement of web and native apps according to market requirements and customer feedback. Improvements and enhancements may require redesign, refactoring, and/or re-engineering. Most projects involve the development of APIs as well as the integration with external APIs. Contracts are usually 6 months, but may be more or less.", 
                location: "5735 Hampton Pl, Vancouver, British Columbia, Canada",
                lat:49.258809, 
                lng: -123.234976,
                company_url: "www.ubc.ca",
                listing_url: "www.ubc.ca/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "Pending",
                email: "jobs@bristol.ca",
                phone: 6049895133
            }
        )
    let jobpost4 = new Jobpost(
            {
                company_name: "Vera's Burger Shack", 
                job_title: "Web Developer", 
                description: "We are looking for talented frontend developers with a winning combination of passion, skills, experience and dedication to join our team and work on our existing products as well as our next-generation, career-defining product that users will rave about.",
                location: "2188 Western Pkwy, Vancouver, British Columbia, Canada",
                lat: 49.265974, 
                lng: -123.243213,
                company_url: "www.verasburgershack.com",
                listing_url: "www.verasburgershack.com/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "Job Offer",
                email: "careers@verasburgershack.com",
                phone: 6042212570
            }
        )
    let jobpost5 = new Jobpost(
            {
                company_name: "McDonald's", 
                job_title: "Web Developer", 
                description: "Akshon Esports (www.akshonesports.com) is a nexus for all things Esports. Our mission is to entice Esports fans with information on trending topics, players, teams, events, and more! We are a team of entrepreneurial individuals who hope to expand the Esports community and bring to the competitive nature of gaming while telling the narratives in the scene. We are looking for a recent graduate who is motivated and committed and also want to expose themselves in the Esports industry. As an Akshon Esports developer, you will be working with passionate and talented development team as well as content creators.",
                location: "5945 Berton Ave, Vancouver, British Columbia, Canada",
                lat:49.254962, 
                lng: -123.236516, 
                company_url: "www.saveonfoods.com",
                listing_url: "www.saveonfoods.com/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "jobs@saveonfoods.com",
                phone: 6042212570   
            }
        )
    let jobpost6 = new Jobpost(
            {
                company_name: "University Golf Club", 
                job_title: "Web Developer", 
                description: "SMPLE is looking for a Full Stack Developer to join our dynamic company. You will be part of the the App development team and work on creating new features, fixing bugs, and help keeping high performance and availability standards on the platform.",
                location: "5182 University Blv, Vancouver, British Columbia, Canada", 
                lat: 49.263887, 
                lng: -123.227593,
                company_url: "www.universitygolf.com",
                listing_url: "www.universitygolf.com/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "Interview",
                email: "careers@universitygolf.com",
                phone: 6042247799
            }
        )
    let jobpost7 = new Jobpost(
            {
                company_name: "Shoppers Drug Mart", 
                job_title: "Web Developer", 
                description: "We are looking for web developer skiled with Drupal, WordPress, Laravel. Must know those 3 technologies. Linux experience and devops a bonus. This is remote work position. Can work from any location within Canada. Must have authorization to work in Canada.",
                location: "5940 University Blvd, Dentistry Bldg, Vancouver, British Columbia, Canada",
                lat: 49.266160, 
                lng: -123.245675, 
                company_url: "www.shoppersdrugmart.ca",
                listing_url: "www.shoppersdrugmart.ca/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "Interview",
                email: "careers@shoppersdrugmart.ca",
                phone: 6042281533
            }
        )
    let jobpost8 = new Jobpost(
            {
                company_name: "Gage Apartments at UBC", 
                job_title: "Web Developer", 
                description: "Payfirma is looking for a junior software developer with background in building scalable, web and mobile applications. Working within an Agile environment you will assist in the development of our HQ platform and mobile apps. If you are driven, a detail-oriented problem solver, and are looking for an opportunity where you can develop experience across a variety of technologies, Payfirma is a great organization for you to grow within.",
                location: "5959 Student Union Blvd, Vancouver, British Columbia, Canada",
                lat: 49.269926, 
                lng: -123.249086, 
                company_url: "www.suitesatubc.com",
                listing_url: "www.suitesatubc.com/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "jobs@suitesatubc.com",
                phone: 6048221000
            }
        )
    let jobpost9 = new Jobpost(
            {
                company_name: "Burgoo Point Grey", 
                job_title: "Web Developer", 
                description: "We are working hard at Avesdo to simplify the journey of buying a new home. Our application is a complete point of sale, analytical and reporting platform that has quickly become the industry standard to transact real estate both online and in presentation centres across Canada.",
                location: "4434 W 10th Ave, Vancouver, British Columbia, Canada",
                lat:49.263909, 
                lng:-123.207286, 
                company_url: "www.burgoo.ca",
                listing_url: "www.burgoo.ca/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "careers@burgoo.ca",
                phone: 6042217839
                    
            }
        )
    let jobpost10 = new Jobpost(
            {
                company_name: "La Brass", 
                job_title: "Web Developer", 
                description: "BrainStation is a global leader in digital skills training and development, offering a 12-week Diploma program in Web Development. BrainStation is currently seeking a Senior Web Developer to lead the delivery of our program through online and in-person teaching. BrainStation Educators are given the unique opportunity to teach, research, and develop applications, making themselves the most well-rounded and informed developers in the market.",
                location: "4473 W 10th Ave, Vancouver, British Columbia, Canada",
                lat: 49.264317, 
                lng: -123.208395, 
                company_url: "www.labrass.co",
                listing_url: "www.labrass.co/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "jobs@labrass.co",
                phone: 6042221980
        }
        )
    let jobpost11 = new Jobpost(
            {
                company_name: "Binning Tower", 
                job_title: "Web Developer", 
                description: "Your job would mainly involve working with the product development team in a highly collaborative environment. We ensure that our developers have a ground up understanding and say in how and what we put on our sites by having them highly involved in planning through agile development.",
                location: "3355 Binning Rd, Vancouver, British Columbia, Canada",
                lat:49.255626, 
                lng:-123.231447,  
                company_url: "www.binningtower.ca",
                listing_url: "www.binningtower.ca/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "careers@binningtower.ca",
                phone: 6042221950         
            }
        )  
        //Software Dev Jobs
    let jobpost12 = new Jobpost(
            {
                company_name: "ICA Projects Inc", 
                job_title: "Software Developer", 
                description: "Payfirma is looking for a junior software developer with background in building scalable, web and mobile applications. Working within an Agile environment you will assist in the development of our HQ platform and mobile apps. If you are driven, a detail-oriented problem solver, and are looking for an opportunity where you can develop experience across a variety of technologies, Payfirma is a great organization for you to grow within.",
                location: "5735 Hampton Pl, Vancouver, British Columbia, Canada", 
                lat: 49.258774, 
                lng: -123.235008,
                company_url: "www.ica-projects.com",
                listing_url: "www.ubc.ca/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "jobs@bristol.ca",
                phone: 6049895133
            }
        )
    let jobpost13 = new Jobpost(  
            {
                company_name: "Norma Rose Point School", 
                job_title: "Software Developer", 
                description: "As a Software Developer Intern you will be part of a team that is designing new innovation solutions for our platforms that has a direct impact for our online customers. The changes we make directly impact the customer experience on BestBuy.ca on numerous platforms (mobile/tablets, desktop, iPhone, Android). An understanding of the Agile development methodology process is a plus as well as a keen, enthusiastic attitude towards coding and new and emerging programming technologies.",
                location: "5488 Ortona Rd, Vancouver, British Columbia, Canada",
                lat: 49.261859, 
                lng: -123.232676, 
                company_url: "www.vsb.bc.ca",
                listing_url: "www.vsb.bc.ca/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "Interview",
                email: "jobs@vsb.bc.ca",
                phone: 6047135950
            }
        )
        let jobpost14 = new Jobpost(
            {
                company_name: "Gold's Gym University Makret", 
                job_title: "Software Developer",
                description:"This is a full time permanent position based on 37 hour/week with the annual salary of $72K and competitive benefits package including extended health, vision, dental and disability insurance, 3 business weeks paid vacation, up to 6 paid sick days per year, gym membership, training subsidy. This role will be working out of our corporate office at 200-13111 Vanier Place, Richmond, BC, V6V 2J1", 
                location: "2155 Allison Rd, Vancouver, British Columbia, Canada", 
                lat: 49.266433, 
                lng: -123.242390,
                company_url: "www.goldsgymbc.ca",
                listing_url: "www.goldsgymbc.ca/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "Job Offer",
                email: "careers@golds.ca",
                phone: 6042244699
            }
        )
        let jobpost15 = new Jobpost(
            {
                company_name: "McDonald's", 
                job_title: "Software Developer", 
                description: "Want to use your expertise to connect to an IT career with a difference? As a junior software developer at WorkSafeBC, you'll do just that. Using leading-edge technology, you'll help connect British Columbians to healthy and safe workplaces — providing support for injury prevention programs, rehabilitation services, workplace insurance, and strong health and safety cultures.",
                location: "101 5728 University Blvd, Vancouver, British Columbia, Canada",
                lat:49.266878, 
                lng: -123.242559,
                company_url: "www.mcdonalds.com",
                listing_url: "www.mcdonalds.com/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "Interview",
                email: "careers@mcdonalds.com",
                phone: 6042212570
            }
        )
        let jobpost16 = new Jobpost(
            {
                company_name: "BC Golf Museum", 
                job_title: "Software Developer", 
                description: "You're keen to be a part of a team designing, building, testing, and deploying code daily into a Production environment. You're on your way to becoming a full-stack developer, meaning: you understand front end development and debugging, have experience on the back end, and may have tinkered with databases and servers. You've heard of agile software development and may have participated in a Scrum team at work or in school. ",
                location: "2545 Blanca St, Vancouver, British Columbia, Canada",
                lat: 49.264577, 
                lng: -123.215141, 
                company_url: "www.bcgolfhouse.com",
                listing_url: "www.bcgolfhouse.com/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "Interview",
                email: "jobs@bcgolfhouse.com",
                phone: "6042224653"
            }
        )
        let jobpost17 = new Jobpost(
            {
                company_name: "UBC Farm", 
                job_title: "Software Developer", 
                description:"Clevest is growing our development team and looking for a Junior Software Developer with a passion for developing software. You will be responsible for delivering quality software systems from requirements through design, development, integration and QA. Development activities may include new product functionality, troubleshooting and maintenance.",
                location: "3461 Ross Drive, Vancouver, British Columbia, Canada",
                lat: 49.251503, 
                lng: -123.237415,
                company_url: "www.ubcfarm.ubc.ca",
                listing_url: "www.ubcfarm.ubc.ca/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "Job Offer",
                email: "jobs@ubcfarm.ubc.ca",
                phone: 6048225092
            }
        )
        let jobpost18 = new Jobpost(
            {
                company_name: "Ponderosa Studios", 
                job_title: "Software Developer",
                description: "Latero Labs is looking for a Software Developer that is passionate about building products to work with small teams on various upcoming projects. Join a dynamic, dedicated, and collaborative team to tackle real-world problems from many different industry verticals.", 
                location: "2075 West Mall, Vancouver, British Columbia, Canada",
                lat: 49.263937, 
                lng: -123.255395, 
                company_url: "www.suitesatubc.com",
                listing_url: "www.suitesatubc.com/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "jobs@suitesatubc.com",
                phone: 6048221000
                
            }
        )
        let jobpost19 = new Jobpost(
            {
                company_name: "Sun Sushi", 
                job_title: "Software Developer",
                description:"Looking for several software developers with embedded design experience for a well-established electronics Hi Tech developer and manufacturer located on Annacis Island, Delta in the area of Smart City and Intelligent Transportation System design. You will be working with other designers and technicians experienced in our current systems. Looking for a self-starter that can work independently and with a team. One or more candidates may be offered full time positions depending on performance.", 
                description: "",
                location: "4512 W 10th Ave, Vancouver, British Columbia, Canada",
                lat: 49.263878, 
                lng: -123.209640, 
                company_url: "www.sunsushi.ca",
                listing_url: "www.sunsushi.ca/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "Interview",
                email: "careers@sunsushi.ca",
                phone: 6042228868
            }
        )
        let jobpost20 = new Jobpost(
            {
                company_name: "Takumi Japanese Restaurant", 
                job_title: "Software Developer", 
                description:"We are looking for full stack developers to join our talented and amazing team in Vancouver.REBCA is an innovative startup in the real estate industry that is determined to introduce exciting and groundbreaking changes to the industry. Our vision is to bring forth unprecedented levels of responsiveness, efficiency, convenience, and transparency in different aspects of the real estate services. If you are an ambitious individual interested in joining a team to help shape the future of the real estate industry, we encourage you to apply!",
                location: "4422 West 10th Avenue, Vancouver, British Columbia, Canada",
                lat:49.263829, 
                lng: -123.206809,  
                company_url: "www.takumisushi.com",
                listing_url: "www.takumisushi.com/jobs",
                date_posted: new Date,
                date_applied: null,
                stage: "N/A",
                email: "jobs@takumisushi.com",
                phone: 6047300330
            }
        )
        let jobpost21 = new Jobpost(
            {
                company_name: "Hewer Home Hardware and Garden Centre", 
                job_title: "Software Developer", 
                description: "Novarc Technologies is a start-up based in North Vancouver. We build collaborative robots for industrial use, with innovative AI systems. We're after a software developer to help us keep expanding the computer vision and machine learning systems we've built, to make our robots more independent and keep doing more with our data.",
                location: "4459 W 10th, Vancouver, British Columbia, Canada",
                lat: 49.264212, 
                lng: -123.207998, 
                company_url: "www.homehardware.ca",
                listing_url: "www.homehardware.ca/careers",
                date_posted: new Date,
                date_applied: null,
                stage: "Job Offer",
                email: "careers@homehardware.ca",
                phone: 6042244934
            }
        )     

        console.log("test");
        jobpost1.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost2.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost3.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost4.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost5.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost6.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost7.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost8.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost9.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost10.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost11.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost12.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost13.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost14.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost15.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost16.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost17.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost18.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost19.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost20.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
        jobpost21.save(function (err) {
            if (err) {
                console(err);
                return next(err);
            }
            console.log('Product Created successfully')
        })
    }
    
    exports.get = function (req, res) {
        var query = Jobpost.find({
            job_title: req.body.job_title
        });
        query.exec(function (err, docs) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.send(docs);
        });
    };



        
//     //populate the db
//     for (var value of jobs){
//         console.log(value);
//         let jobpost = new Jobpost(
//             {
//                 company_name: [value.company_name],
//                 description: [value.description],
//                 job_title: [value.job_title],
//                 location: [value.location],
//                 company_url: [value.company_url],
//                 listing_url: [value.listing_url],
//                 date_posted: [value.date_posted],
//                 date_applied: [value.date_applied],
//                 stage: [value.stage],
//                 email: [value.email],
//                 phone: [value.phone]
//             }
//         };   
//     );
// };

