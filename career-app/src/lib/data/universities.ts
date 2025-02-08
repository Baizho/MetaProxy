interface Profession {
    name: string; // Name of the profession
    studyField: string; // Field of study in university
    universities: University[]; // Top 20 universities for the study field
}

interface University {
    name: string; // Name of the university
    logoLink: string; // Link to the university's logo
    recommendedCourse: string; // Recommended course for the user
}


const universities: Profession[] = [
    {
        "name": "Software Engineer",
        "studyField": "Computer Science",
        "universities": [
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Introduction to Computer Science and Programming Using Python" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Algorithms Specialization" },
            { "name": "Carnegie Mellon University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png", "recommendedCourse": "Principles of Software Construction: Objects, Design, and Concurrency" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "The Structure and Interpretation of Computer Programs" },
            { "name": "California Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Caltech_logo.svg/1200px-Caltech_logo.svg.png", "recommendedCourse": "Learning From Data (Introductory Machine Learning)" },
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "CS50: Introduction to Computer Science" },
            { "name": "Princeton University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Princeton_shield.svg/1200px-Princeton_shield.svg.png", "recommendedCourse": "Algorithms, Part I and II" },
            { "name": "University of Cambridge", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/University_of_Cambridge_crest.svg/1200px-University_of_Cambridge_crest.svg.png", "recommendedCourse": "Object-Oriented Programming in Java" },
            { "name": "University of Oxford", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Oxford_crest.svg/1200px-Oxford_crest.svg.png", "recommendedCourse": "Functional Programming in Haskell" },
            { "name": "ETH Zurich", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ETH_Zurich_logo.svg/1200px-ETH_Zurich_logo.svg.png", "recommendedCourse": "Parallel Programming" }
            // Add remaining universities up to 20
        ]
    },
    {
        "name": "Doctor",
        "studyField": "Medicine",
        "universities": [
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Human Anatomy and Physiology" },
            { "name": "University of Oxford", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Oxford_crest.svg/1200px-Oxford_crest.svg.png", "recommendedCourse": "Clinical Medicine" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Medical Neuroscience" },
            { "name": "Johns Hopkins University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Johns_Hopkins_University_seal.svg/1200px-Johns_Hopkins_University_seal.svg.png", "recommendedCourse": "Epidemiology in Public Health Practice" },
            { "name": "University of Cambridge", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/University_of_Cambridge_crest.svg/1200px-University_of_Cambridge_crest.svg.png", "recommendedCourse": "Global Health and Humanitarianism" },
            { "name": "University of California, San Francisco", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UCSF_logo.svg/1200px-UCSF_logo.svg.png", "recommendedCourse": "Foundations of Patient Care" },
            { "name": "Yale University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yale_University_shield.svg/1200px-Yale_University_shield.svg.png", "recommendedCourse": "Introduction to Clinical Psychology" },
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Fundamentals of Nursing" },
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Healthcare Innovation" },
            { "name": "Duke University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Duke_University_seal.svg/1200px-Duke_University_seal.svg.png", "recommendedCourse": "Medical Ethics" }
            // Add remaining universities up to 20
        ]
    },
    {
        "name": "Teacher",
        "studyField": "Education",
        "universities": [
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Teaching for Understanding" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "How to Learn Math: For Students" },
            { "name": "University of Cambridge", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/University_of_Cambridge_crest.svg/1200px-University_of_Cambridge_crest.svg.png", "recommendedCourse": "Educational Leadership" },
            { "name": "University of Oxford", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Oxford_crest.svg/1200px-Oxford_crest.svg.png", "recommendedCourse": "Child Development and Learning" },
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Inclusive Teaching Practices" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Equity and Diversity in Education" },
            { "name": "University of Michigan", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png", "recommendedCourse": "Instructional Design" },
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Online Teaching Strategies" },
            { "name": "University of Wisconsin-Madison", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/University_of_Wisconsin%E2%80%93Madison_logo.svg/1200px-University_of_Wisconsin%E2%80%93Madison_logo.svg.png", "recommendedCourse": "Curriculum Development" },
            { "name": "Vanderbilt University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vanderbilt_University_seal.svg/1200px-Vanderbilt_University_seal.svg.png", "recommendedCourse": "Classroom Management Techniques" }
            // Add remaining universities up to 20
        ]
    },
    {
        "name": "Architect",
        "studyField": "Architecture",
        "universities": [
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Design Thinking for Leading and Learning" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Sustainable Architecture" },
            { "name": "University of Cambridge", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/University_of_Cambridge_crest.svg/1200px-University_of_Cambridge_crest.svg.png", "recommendedCourse": "History of Architecture" },
            { "name": "ETH Zurich", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ETH_Zurich_logo.svg/1200px-ETH_Zurich_logo.svg.png", "recommendedCourse": "Digital Fabrication in Architecture" },
            { "name": "Delft University of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/TU_Delft_logo.svg/1200px-TU_Delft_logo.svg.png", "recommendedCourse": "Urban Design and Planning" },
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Architectural Theory" },
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Building Information Modeling (BIM)" },
            { "name": "University of Tokyo", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/University_of_Tokyo_logo.svg/1200px-University_of_Tokyo_logo.svg.png", "recommendedCourse": "Japanese Architectural Design" },
            { "name": "Politecnico di Milano", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Politecnico_di_Milano_logo.svg/1200px-Politecnico_di_Milano_logo.svg.png", "recommendedCourse": "Interior Architecture" },
            { "name": "University of Sydney", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/University_of_Sydney_logo.svg/1200px-University_of_Sydney_logo.svg.png", "recommendedCourse": "Landscape Architecture" }
            // Add remaining universities up to 20
        ]
    },
    {
        "name": "Graphic Designer",
        "studyField": "Graphic Design",
        "universities": [
            { "name": "Rhode Island School of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rhode_Island_School_of_Design_logo.svg/1200px-Rhode_Island_School_of_Design_logo.svg.png", "recommendedCourse": "Visual Communication Design" },
            { "name": "Parsons School of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Parsons_The_New_School_for_Design_logo.svg/1200px-Parsons_The_New_School_for_Design_logo.svg.png", "recommendedCourse": "Typography Fundamentals" },
            { "name": "ArtCenter College of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ArtCenter_College_of_Design_logo.svg/1200px-ArtCenter_College_of_Design_logo.svg.png", "recommendedCourse": "Branding and Identity Design" },
            { "name": "Royal College of Art", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Royal_College_of_Art_logo.svg/1200px-Royal_College_of_Art_logo.svg.png", "recommendedCourse": "Experimental Typography" },
            { "name": "School of Visual Arts", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/School_of_Visual_Arts_logo.svg/1200px-School_of_Visual_Arts_logo.svg.png", "recommendedCourse": "Digital Illustration" },
            { "name": "California Institute of the Arts", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/California_Institute_of_the_Arts_logo.svg/1200px-California_Institute_of_the_Arts_logo.svg.png", "recommendedCourse": "Motion Graphics Design" },
            { "name": "Pratt Institute", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pratt_Institute_logo.svg/1200px-Pratt_Institute_logo.svg.png", "recommendedCourse": "User Interface Design" },
            { "name": "Savannah College of Art and Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Savannah_College_of_Art_and_Design_logo.svg/1200px-Savannah_College_of_Art_and_Design_logo.svg.png", "recommendedCourse": "Interactive Design" },
            { "name": "Emily Carr University of Art + Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Emily_Carr_University_of_Art_and_Design_logo.svg/1200px-Emily_Carr_University_of_Art_and_Design_logo.svg.png", "recommendedCourse": "Creative Coding" },
            { "name": "Central Saint Martins", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Central_Saint_Martins_logo.svg/1200px-Central_Saint_Martins_logo.svg.png", "recommendedCourse": "Design Thinking for Innovation" }
            // Add remaining universities up to 20
        ]
    },
    {
        "name": "Data Scientist",
        "studyField": "Data Science",
        "universities": [
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Data Science and Machine Learning Bootcamp" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Statistical Learning" },
            { "name": "Carnegie Mellon University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png", "recommendedCourse": "Data Mining" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Big Data Analytics" },
            { "name": "University of Washington", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_Washington_logo.svg/1200px-University_of_Washington_logo.svg.png", "recommendedCourse": "Data Visualization" },
            { "name": "University of Michigan", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png", "recommendedCourse": "Applied Data Science with Python" },
            { "name": "Georgia Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png", "recommendedCourse": "Machine Learning for Trading" },
            { "name": "University of Illinois Urbana-Champaign", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/University_of_Illinois_at_Urbana-Champaign_logo.svg/1200px-University_of_Illinois_at_Urbana-Champaign_logo.svg.png", "recommendedCourse": "Cloud Computing Concepts" },
            { "name": "University of Toronto", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/University_of_Toronto_logo.svg/1200px-University_of_Toronto_logo.svg.png", "recommendedCourse": "Neural Networks for Machine Learning" },
            { "name": "National University of Singapore", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/National_University_of_Singapore_logo.svg/1200px-National_University_of_Singapore_logo.svg.png", "recommendedCourse": "Data Science Essentials" }
            // Add remaining universities up to 20
        ]
    },
    {
        "name": "Lawyer",
        "studyField": "Law",
        "universities": [
            { "name": "Yale University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yale_University_shield.svg/1200px-Yale_University_shield.svg.png", "recommendedCourse": "Constitutional Law" },
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Corporate Law" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Intellectual Property Law" },
            { "name": "University of Chicago", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png", "recommendedCourse": "Contract Law" },
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Environmental Law" },
            { "name": "New York University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png", "recommendedCourse": "Tax Law" },
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Business Law" },
            { "name": "University of Virginia", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/University_of_Virginia_seal.svg/1200px-University_of_Virginia_seal.svg.png", "recommendedCourse": "Criminal Law" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "International Law" },
            { "name": "University of Michigan", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png", "recommendedCourse": "Civil Rights Law" }
            // Add remaining universities up to 20
        ]
    },
    {
        "name": "Entrepreneur",
        "studyField": "Business Administration",
        "universities": [
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Entrepreneurship Essentials" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Startup Engineering" },
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Innovation and Commercialization" },
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Venture Capital and Private Equity" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "New Venture Finance" }
        ]
    },
    {
        "name": "Psychologist",
        "studyField": "Psychology",
        "universities": [
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Introduction to Psychology" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Social Psychology" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Cognitive Neuroscience" },
            { "name": "University of Michigan", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png", "recommendedCourse": "Developmental Psychology" },
            { "name": "University of Oxford", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Oxford_crest.svg/1200px-Oxford_crest.svg.png", "recommendedCourse": "Clinical Psychology" }
        ]
    },
    {
        "name": "Mechanical Engineer",
        "studyField": "Mechanical Engineering",
        "universities": [
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Introduction to Solid Mechanics" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Thermodynamics" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Fluid Mechanics" },
            { "name": "California Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Caltech_logo.svg/1200px-Caltech_logo.svg.png", "recommendedCourse": "Robotics" },
            { "name": "Georgia Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png", "recommendedCourse": "Aerospace Structures" }
        ]
    },
    {
        "name": "Nurse",
        "studyField": "Nursing",
        "universities": [
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Fundamentals of Nursing" },
            { "name": "Johns Hopkins University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Johns_Hopkins_University_seal.svg/1200px-Johns_Hopkins_University_seal.svg.png", "recommendedCourse": "Advanced Health Assessment" },
            { "name": "Duke University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Duke_University_seal.svg/1200px-Duke_University_seal.svg.png", "recommendedCourse": "Nursing Leadership" },
            { "name": "University of California, San Francisco", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UCSF_logo.svg/1200px-UCSF_logo.svg.png", "recommendedCourse": "Pediatric Nursing" },
            { "name": "University of Washington", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_Washington_logo.svg/1200px-University_of_Washington_logo.svg.png", "recommendedCourse": "Geriatric Nursing" }
        ]
    },
    {
        "name": "Journalist",
        "studyField": "Journalism",
        "universities": [
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Data Journalism" },
            { "name": "Northwestern University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Northwestern_University_seal.svg/1200px-Northwestern_University_seal.svg.png", "recommendedCourse": "Investigative Reporting" },
            { "name": "University of Southern California", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/USC_Cardinal_and_Gold.svg/1200px-USC_Cardinal_and_Gold.svg.png", "recommendedCourse": "Broadcast Journalism" },
            { "name": "University of Missouri", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/University_of_Missouri_seal.svg/1200px-University_of_Missouri_seal.svg.png", "recommendedCourse": "Photojournalism" },
            { "name": "New York University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png", "recommendedCourse": "Digital Media Production" }
        ]
    },
    {
        "name": "Chef",
        "studyField": "Culinary Arts",
        "universities": [
            { "name": "Culinary Institute of America", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Culinary_Institute_of_America_logo.svg/1200px-Culinary_Institute_of_America_logo.svg.png", "recommendedCourse": "Classic Culinary Techniques" },
            { "name": "Le Cordon Bleu", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Le_Cordon_Bleu_logo.svg/1200px-Le_Cordon_Bleu_logo.svg.png", "recommendedCourse": "French Cuisine Fundamentals" },
            { "name": "Johnson & Wales University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Johnson_%26_Wales_University_logo.svg/1200px-Johnson_%26_Wales_University_logo.svg.png", "recommendedCourse": "Baking and Pastry Arts" },
            { "name": "New England Culinary Institute", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/New_England_Culinary_Institute_logo.svg/1200px-New_England_Culinary_Institute_logo.svg.png", "recommendedCourse": "Farm-to-Table Cooking" },
            { "name": "Institute of Culinary Education", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Institute_of_Culinary_Education_logo.svg/1200px-Institute_of_Culinary_Education_logo.svg.png", "recommendedCourse": "International Cuisine" }
        ]
    },
    {
        "name": "Photographer",
        "studyField": "Photography",
        "universities": [
            { "name": "Rhode Island School of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rhode_Island_School_of_Design_logo.svg/1200px-Rhode_Island_School_of_Design_logo.svg.png", "recommendedCourse": "Digital Photography" },
            { "name": "School of Visual Arts", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/School_of_Visual_Arts_logo.svg/1200px-School_of_Visual_Arts_logo.svg.png", "recommendedCourse": "Portrait Photography" },
            { "name": "Parsons School of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Parsons_The_New_School_for_Design_logo.svg/1200px-Parsons_The_New_School_for_Design_logo.svg.png", "recommendedCourse": "Fashion Photography" },
            { "name": "ArtCenter College of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ArtCenter_College_of_Design_logo.svg/1200px-ArtCenter_College_of_Design_logo.svg.png", "recommendedCourse": "Landscape Photography" },
            { "name": "Savannah College of Art and Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Savannah_College_of_Art_and_Design_logo.svg/1200px-Savannah_College_of_Art_and_Design_logo.svg.png", "recommendedCourse": "Documentary Photography" }
        ]
    },
    {
        "name": "Electrician",
        "studyField": "Electrical Engineering",
        "universities": [
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Circuit Analysis" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Power Systems" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Electronics Design" },
            { "name": "California Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Caltech_logo.svg/1200px-Caltech_logo.svg.png", "recommendedCourse": "Renewable Energy Systems" },
            { "name": "Georgia Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png", "recommendedCourse": "Control Systems" }
        ]
    },
    {
        "name": "Marketing Specialist",
        "studyField": "Marketing",
        "universities": [
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Consumer Behavior" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Digital Marketing" },
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Brand Management" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Marketing Analytics" },
            { "name": "Northwestern University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Northwestern_University_seal.svg/1200px-Northwestern_University_seal.svg.png", "recommendedCourse": "Integrated Marketing Communications" }
        ]
    },
    {
        "name": "Environmental Scientist",
        "studyField": "Environmental Science",
        "universities": [
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Climate Change Science" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Sustainability Management" },
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Environmental Policy" },
            { "name": "University of Cambridge", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/University_of_Cambridge_crest.svg/1200px-University_of_Cambridge_crest.svg.png", "recommendedCourse": "Ecosystem Dynamics" },
            { "name": "University of Oxford", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Oxford_crest.svg/1200px-Oxford_crest.svg.png", "recommendedCourse": "Conservation Biology" }
        ]
    },
    {
        "name": "Accountant",
        "studyField": "Accounting",
        "universities": [
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Financial Accounting" },
            { "name": "University of Chicago", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png", "recommendedCourse": "Managerial Accounting" },
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Taxation Principles" },
            { "name": "New York University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png", "recommendedCourse": "Auditing and Assurance" },
            { "name": "London School of Economics", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/LSE_crest.svg/1200px-LSE_crest.svg.png", "recommendedCourse": "Corporate Finance" }
        ]
    },
    {
        "name": "Pilot",
        "studyField": "Aviation",
        "universities": [
            { "name": "Embry-Riddle Aeronautical University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Embry-Riddle_Aeronautical_University_logo.svg/1200px-Embry-Riddle_Aeronautical_University_logo.svg.png", "recommendedCourse": "Flight Theory and Aerodynamics" },
            { "name": "Purdue University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Purdue_University_logo.svg/1200px-Purdue_University_logo.svg.png", "recommendedCourse": "Aircraft Systems" },
            { "name": "Ohio State University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ohio_State_University_logo.svg/1200px-Ohio_State_University_logo.svg.png", "recommendedCourse": "Air Traffic Control" },
            { "name": "University of North Dakota", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_North_Dakota_logo.svg/1200px-University_of_North_Dakota_logo.svg.png", "recommendedCourse": "Aviation Safety" },
            { "name": "Florida Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Florida_Tech_logo.svg/1200px-Florida_Tech_logo.svg.png", "recommendedCourse": "Commercial Pilot Training" }
        ]
    },
    {
        "name": "Pharmacist",
        "studyField": "Pharmacy",
        "universities": [
            { "name": "University of California, San Francisco", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UCSF_logo.svg/1200px-UCSF_logo.svg.png", "recommendedCourse": "Pharmacology Fundamentals" },
            { "name": "University of North Carolina at Chapel Hill", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/UNC_logo.svg/1200px-UNC_logo.svg.png", "recommendedCourse": "Clinical Pharmacy Practice" },
            { "name": "University of Minnesota", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/University_of_Minnesota_logo.svg/1200px-University_of_Minnesota_logo.svg.png", "recommendedCourse": "Pharmaceutical Chemistry" },
            { "name": "Ohio State University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ohio_State_University_logo.svg/1200px-Ohio_State_University_logo.svg.png", "recommendedCourse": "Drug Development Process" },
            { "name": "University of Pittsburgh", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Pittsburgh_logo.svg/1200px-University_of_Pittsburgh_logo.svg.png", "recommendedCourse": "Pharmacotherapy" }
        ]
    },
    {
        "name": "Game Developer",
        "studyField": "Game Design",
        "universities": [
            { "name": "University of Southern California", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/USC_Cardinal_and_Gold.svg/1200px-USC_Cardinal_and_Gold.svg.png", "recommendedCourse": "Game Engine Architecture" },
            { "name": "DigiPen Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/DigiPen_Institute_of_Technology_logo.svg/1200px-DigiPen_Institute_of_Technology_logo.svg.png", "recommendedCourse": "Game Programming" },
            { "name": "Rochester Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Rochester_Institute_of_Technology_logo.svg/1200px-Rochester_Institute_of_Technology_logo.svg.png", "recommendedCourse": "Interactive Narrative Design" },
            { "name": "Savannah College of Art and Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Savannah_College_of_Art_and_Design_logo.svg/1200px-Savannah_College_of_Art_and_Design_logo.svg.png", "recommendedCourse": "3D Modeling for Games" },
            { "name": "Full Sail University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Full_Sail_University_logo.svg/1200px-Full_Sail_University_logo.svg.png", "recommendedCourse": "Game Animation" }
        ]
    },
    {
        "name": "Interior Designer",
        "studyField": "Interior Design",
        "universities": [
            { "name": "Pratt Institute", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pratt_Institute_logo.svg/1200px-Pratt_Institute_logo.svg.png", "recommendedCourse": "Space Planning" },
            { "name": "Rhode Island School of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rhode_Island_School_of_Design_logo.svg/1200px-Rhode_Island_School_of_Design_logo.svg.png", "recommendedCourse": "Furniture Design" },
            { "name": "Parsons School of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Parsons_The_New_School_for_Design_logo.svg/1200px-Parsons_The_New_School_for_Design_logo.svg.png", "recommendedCourse": "Lighting Design" },
            { "name": "Savannah College of Art and Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Savannah_College_of_Art_and_Design_logo.svg/1200px-Savannah_College_of_Art_and_Design_logo.svg.png", "recommendedCourse": "Sustainable Design" },
            { "name": "New York School of Interior Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/New_York_School_of_Interior_Design_logo.svg/1200px-New_York_School_of_Interior_Design_logo.svg.png", "recommendedCourse": "Residential Design" }
        ]
    },
    {
        "name": "Social Worker",
        "studyField": "Social Work",
        "universities": [
            { "name": "University of Michigan", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png", "recommendedCourse": "Community Organizing" },
            { "name": "University of Chicago", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png", "recommendedCourse": "Social Policy Analysis" },
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Clinical Social Work" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Child Welfare Practice" },
            { "name": "Washington University in St. Louis", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Washington_University_in_St._Louis_logo.svg/1200px-Washington_University_in_St._Louis_logo.svg.png", "recommendedCourse": "Mental Health Counseling" }
        ]
    },
    {
        "name": "Civil Engineer",
        "studyField": "Civil Engineering",
        "universities": [
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Structural Analysis" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Geotechnical Engineering" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Transportation Engineering" },
            { "name": "California Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Caltech_logo.svg/1200px-Caltech_logo.svg.png", "recommendedCourse": "Water Resources Engineering" },
            { "name": "Georgia Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png", "recommendedCourse": "Construction Management" }
        ]
    },
    {
        "name": "Fashion Designer",
        "studyField": "Fashion Design",
        "universities": [
            { "name": "Parsons School of Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Parsons_The_New_School_for_Design_logo.svg/1200px-Parsons_The_New_School_for_Design_logo.svg.png", "recommendedCourse": "Fashion Illustration" },
            { "name": "Fashion Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fashion_Institute_of_Technology_logo.svg/1200px-Fashion_Institute_of_Technology_logo.svg.png", "recommendedCourse": "Textile Design" },
            { "name": "Central Saint Martins", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Central_Saint_Martins_logo.svg/1200px-Central_Saint_Martins_logo.svg.png", "recommendedCourse": "Fashion Marketing" },
            { "name": "Royal Academy of Fine Arts Antwerp", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Royal_Academy_of_Fine_Arts_Antwerp_logo.svg/1200px-Royal_Academy_of_Fine_Arts_Antwerp_logo.svg.png", "recommendedCourse": "Haute Couture Techniques" },
            { "name": "Polimoda", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Polimoda_logo.svg/1200px-Polimoda_logo.svg.png", "recommendedCourse": "Luxury Brand Management" }
        ]
    },
    {
        "name": "Biomedical Engineer",
        "studyField": "Biomedical Engineering",
        "universities": [
            { "name": "Johns Hopkins University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Johns_Hopkins_University_seal.svg/1200px-Johns_Hopkins_University_seal.svg.png", "recommendedCourse": "Medical Imaging" },
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Biomaterials" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Neural Engineering" },
            { "name": "University of California, San Diego", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/UCSD_logo.svg/1200px-UCSD_logo.svg.png", "recommendedCourse": "Tissue Engineering" },
            { "name": "Georgia Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png", "recommendedCourse": "Biomechanics" }
        ]
    },
    {
        "name": "Veterinarian",
        "studyField": "Veterinary Medicine",
        "universities": [
            { "name": "University of California, Davis", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Davis_logo.svg/1200px-UC_Davis_logo.svg.png", "recommendedCourse": "Animal Anatomy and Physiology" },
            { "name": "Cornell University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png", "recommendedCourse": "Veterinary Surgery" },
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Small Animal Medicine" },
            { "name": "North Carolina State University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/NCSU_logo.svg/1200px-NCSU_logo.svg.png", "recommendedCourse": "Equine Medicine" },
            { "name": "Texas A&M University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Texas_AM_University_logo.svg/1200px-Texas_AM_University_logo.svg.png", "recommendedCourse": "Livestock Health Management" }
        ]
    },
    {
        "name": "Animator",
        "studyField": "Animation",
        "universities": [
            { "name": "California Institute of the Arts", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/California_Institute_of_the_Arts_logo.svg/1200px-California_Institute_of_the_Arts_logo.svg.png", "recommendedCourse": "Character Animation" },
            { "name": "School of Visual Arts", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/School_of_Visual_Arts_logo.svg/1200px-School_of_Visual_Arts_logo.svg.png", "recommendedCourse": "Stop Motion Animation" },
            { "name": "Ringling College of Art and Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ringling_College_of_Art_and_Design_logo.svg/1200px-Ringling_College_of_Art_and_Design_logo.svg.png", "recommendedCourse": "3D Animation" },
            { "name": "Savannah College of Art and Design", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Savannah_College_of_Art_and_Design_logo.svg/1200px-Savannah_College_of_Art_and_Design_logo.svg.png", "recommendedCourse": "Visual Effects for Animation" },
            { "name": "Gobelins, l'école de l'image", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gobelins_logo.svg/1200px-Gobelins_logo.svg.png", "recommendedCourse": "Storytelling for Animators" }
        ]
    },
    {
        "name": "Financial Analyst",
        "studyField": "Finance",
        "universities": [
            { "name": "University of Pennsylvania", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/University_of_Pennsylvania_seal.svg/1200px-University_of_Pennsylvania_seal.svg.png", "recommendedCourse": "Corporate Finance" },
            { "name": "University of Chicago", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png", "recommendedCourse": "Investment Banking" },
            { "name": "Columbia University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png", "recommendedCourse": "Portfolio Management" },
            { "name": "New York University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png", "recommendedCourse": "Risk Management" },
            { "name": "London Business School", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/London_Business_School_logo.svg/1200px-London_Business_School_logo.svg.png", "recommendedCourse": "Financial Modeling" }
        ]
    },
    {
        "name": "Event Planner",
        "studyField": "Event Management",
        "universities": [
            { "name": "George Washington University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/George_Washington_University_seal.svg/1200px-George_Washington_University_seal.svg.png", "recommendedCourse": "Event Planning Fundamentals" },
            { "name": "New York University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png", "recommendedCourse": "Corporate Event Management" },
            { "name": "University of Nevada, Las Vegas", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/UNLV_logo.svg/1200px-UNLV_logo.svg.png", "recommendedCourse": "Wedding and Social Event Planning" },
            { "name": "Endicott College", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Endicott_College_logo.svg/1200px-Endicott_College_logo.svg.png", "recommendedCourse": "Experiential Learning in Event Design" },
            { "name": "Johnson & Wales University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Johnson_%26_Wales_University_logo.svg/1200px-Johnson_%26_Wales_University_logo.svg.png", "recommendedCourse": "Hospitality and Event Leadership" }
        ]
    },
    {
        "name": "Dentist",
        "studyField": "Dentistry",
        "universities": [
            { "name": "Harvard University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png", "recommendedCourse": "Oral Surgery Techniques" },
            { "name": "University of Michigan", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/University_of_Michigan_logo.svg/1200px-University_of_Michigan_logo.svg.png", "recommendedCourse": "Orthodontics" },
            { "name": "University of California, San Francisco", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UCSF_logo.svg/1200px-UCSF_logo.svg.png", "recommendedCourse": "Pediatric Dentistry" },
            { "name": "King's College London", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kings_College_London_logo.svg/1200px-Kings_College_London_logo.svg.png", "recommendedCourse": "Restorative Dentistry" },
            { "name": "Tokyo Medical and Dental University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tokyo_Medical_and_Dental_University_logo.svg/1200px-Tokyo_Medical_and_Dental_University_logo.svg.png", "recommendedCourse": "Prosthodontics" }
        ]
    },
    {
        "name": "Musician",
        "studyField": "Music",
        "universities": [
            { "name": "Juilliard School", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Juilliard_School_logo.svg/1200px-Juilliard_School_logo.svg.png", "recommendedCourse": "Classical Performance" },
            { "name": "Berklee College of Music", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Berklee_College_of_Music_logo.svg/1200px-Berklee_College_of_Music_logo.svg.png", "recommendedCourse": "Music Production" },
            { "name": "Royal Academy of Music", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Royal_Academy_of_Music_logo.svg/1200px-Royal_Academy_of_Music_logo.svg.png", "recommendedCourse": "Composition and Arranging" },
            { "name": "Curtis Institute of Music", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Curtis_Institute_of_Music_logo.svg/1200px-Curtis_Institute_of_Music_logo.svg.png", "recommendedCourse": "Orchestral Conducting" },
            { "name": "Conservatoire de Paris", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Conservatoire_de_Paris_logo.svg/1200px-Conservatoire_de_Paris_logo.svg.png", "recommendedCourse": "Jazz Improvisation" }
        ]
    },
    {
        "name": "Librarian",
        "studyField": "Library Science",
        "universities": [
            { "name": "University of Illinois Urbana-Champaign", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/University_of_Illinois_at_Urbana-Champaign_logo.svg/1200px-University_of_Illinois_at_Urbana-Champaign_logo.svg.png", "recommendedCourse": "Information Organization" },
            { "name": "University of Washington", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/University_of_Washington_logo.svg/1200px-University_of_Washington_logo.svg.png", "recommendedCourse": "Digital Libraries" },
            { "name": "Simmons University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Simmons_University_logo.svg/1200px-Simmons_University_logo.svg.png", "recommendedCourse": "Archival Studies" },
            { "name": "University of Toronto", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/University_of_Toronto_logo.svg/1200px-University_of_Toronto_logo.svg.png", "recommendedCourse": "Youth Services in Libraries" },
            { "name": "University of North Carolina at Chapel Hill", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/UNC_logo.svg/1200px-UNC_logo.svg.png", "recommendedCourse": "Research Data Management" }
        ]
    },
    {
        "name": "Astronomer",
        "studyField": "Astronomy",
        "universities": [
            { "name": "California Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Caltech_logo.svg/1200px-Caltech_logo.svg.png", "recommendedCourse": "Astrophysics" },
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Cosmology" },
            { "name": "University of Cambridge", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/University_of_Cambridge_crest.svg/1200px-University_of_Cambridge_crest.svg.png", "recommendedCourse": "Planetary Science" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Stellar Evolution" },
            { "name": "Princeton University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Princeton_shield.svg/1200px-Princeton_shield.svg.png", "recommendedCourse": "Galactic Dynamics" }
        ]
    },
    {
        "name": "Real Estate Agent",
        "studyField": "Real Estate",
        "universities": [
            { "name": "New York University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png", "recommendedCourse": "Real Estate Finance" },
            { "name": "University of Southern California", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/USC_Cardinal_and_Gold.svg/1200px-USC_Cardinal_and_Gold.svg.png", "recommendedCourse": "Property Development" },
            { "name": "University of Wisconsin-Madison", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/University_of_Wisconsin%E2%80%93Madison_logo.svg/1200px-University_of_Wisconsin%E2%80%93Madison_logo.svg.png", "recommendedCourse": "Real Estate Law" },
            { "name": "University of Florida", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/University_of_Florida_logo.svg/1200px-University_of_Florida_logo.svg.png", "recommendedCourse": "Real Estate Market Analysis" },
            { "name": "Cornell University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png", "recommendedCourse": "Sustainable Real Estate Practices" }
        ]
    },
    {
        "name": "Translator",
        "studyField": "Translation Studies",
        "universities": [
            { "name": "Monash University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Monash_University_logo.svg/1200px-Monash_University_logo.svg.png", "recommendedCourse": "Professional Translation Practice" },
            { "name": "University of Geneva", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Geneva_logo.svg/1200px-University_of_Geneva_logo.svg.png", "recommendedCourse": "Interpreting Skills" },
            { "name": "University of Leeds", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Leeds_logo.svg/1200px-University_of_Leeds_logo.svg.png", "recommendedCourse": "Localization and Translation Technologies" },
            { "name": "University of Ottawa", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/University_of_Ottawa_logo.svg/1200px-University_of_Ottawa_logo.svg.png", "recommendedCourse": "Legal Translation" },
            { "name": "University of Melbourne", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/University_of_Melbourne_logo.svg/1200px-University_of_Melbourne_logo.svg.png", "recommendedCourse": "Medical Translation" }
        ]
    },
    {
        "name": "Cybersecurity Specialist",
        "studyField": "Cybersecurity",
        "universities": [
            { "name": "Massachusetts Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png", "recommendedCourse": "Network Security" },
            { "name": "Stanford University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png", "recommendedCourse": "Ethical Hacking" },
            { "name": "Carnegie Mellon University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png", "recommendedCourse": "Cryptography" },
            { "name": "University of California, Berkeley", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UC_Berkeley_seal.svg/1200px-UC_Berkeley_seal.svg.png", "recommendedCourse": "Cyber Threat Intelligence" },
            { "name": "Georgia Institute of Technology", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png", "recommendedCourse": "Cloud Security" }
        ]
    },
    {
        "name": "Film Director",
        "studyField": "Film Studies",
        "universities": [
            { "name": "University of Southern California", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/USC_Cardinal_and_Gold.svg/1200px-USC_Cardinal_and_Gold.svg.png", "recommendedCourse": "Directing for Film" },
            { "name": "New York University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/New_York_University_seal.svg/1200px-New_York_University_seal.svg.png", "recommendedCourse": "Screenwriting" },
            { "name": "American Film Institute", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Film_Institute_logo.svg/1200px-American_Film_Institute_logo.svg.png", "recommendedCourse": "Cinematography" },
            { "name": "University of California, Los Angeles", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/UCLA_logo.svg/1200px-UCLA_logo.svg.png", "recommendedCourse": "Film Editing" },
            { "name": "London Film School", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/London_Film_School_logo.svg/1200px-London_Film_School_logo.svg.png", "recommendedCourse": "Sound Design for Film" }
        ]
    },
    {
        "name": "Physiotherapist",
        "studyField": "Physiotherapy",
        "universities": [
            { "name": "University of Melbourne", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/University_of_Melbourne_logo.svg/1200px-University_of_Melbourne_logo.svg.png", "recommendedCourse": "Musculoskeletal Physiotherapy" },
            { "name": "University of Toronto", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/University_of_Toronto_logo.svg/1200px-University_of_Toronto_logo.svg.png", "recommendedCourse": "Neurological Rehabilitation" },
            { "name": "University of Pittsburgh", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Pittsburgh_logo.svg/1200px-University_of_Pittsburgh_logo.svg.png", "recommendedCourse": "Sports Physiotherapy" },
            { "name": "University of Sydney", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/University_of_Sydney_logo.svg/1200px-University_of_Sydney_logo.svg.png", "recommendedCourse": "Cardiorespiratory Physiotherapy" },
            { "name": "McGill University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/McGill_University_logo.svg/1200px-McGill_University_logo.svg.png", "recommendedCourse": "Pediatric Physiotherapy" }
        ]
    },
    {
        "name": "Tour Guide",
        "studyField": "Tourism and Hospitality",
        "universities": [
            { "name": "University of Central Florida", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/University_of_Central_Florida_logo.svg/1200px-University_of_Central_Florida_logo.svg.png", "recommendedCourse": "Tourism Management" },
            { "name": "Hong Kong Polytechnic University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hong_Kong_Polytechnic_University_logo.svg/1200px-Hong_Kong_Polytechnic_University_logo.svg.png", "recommendedCourse": "Heritage Tourism" },
            { "name": "University of Surrey", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/University_of_Surrey_logo.svg/1200px-University_of_Surrey_logo.svg.png", "recommendedCourse": "Adventure Tourism" },
            { "name": "Purdue University", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Purdue_University_logo.svg/1200px-Purdue_University_logo.svg.png", "recommendedCourse": "Ecotourism" },
            { "name": "University of Queensland", "logoLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/University_of_Queensland_logo.svg/1200px-University_of_Queensland_logo.svg.png", "recommendedCourse": "Cultural Tourism" }
        ]
    }
]


export default universities;