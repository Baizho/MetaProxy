// data/professions.ts
export interface IProfession {
    name: string; // Name of the profession
    link: string; // URL of the image representing the profession
}

const professions: IProfession[] = [
    { name: "Software Engineer", link: "https://t3.ftcdn.net/jpg/09/52/96/00/240_F_952960021_HzqF5z3tpXpfpchbCLJnfLVNtgyCbQiC.jpg" },
    { name: "Doctor", link: "https://avatars.mds.yandex.net/i?id=71e7d1033a918c4df378fe9125e6e6d28ca0942a-5288661-images-thumbs&n=13" },
    { name: "Teacher", link: "https://avatars.mds.yandex.net/i?id=dd0bf76844fd84bc9ac5c03a7f47ee5e455b69cf-5850174-images-thumbs&n=13" },
    { name: "Architect", link: "https://avatars.mds.yandex.net/i?id=42165e6c13e7c67fad9d8482b587bc891d7b5006-11919578-images-thumbs&n=13" },
    { name: "Graphic Designer", link: "https://avatars.mds.yandex.net/i?id=e9ee10fb45ab14e3c8ea792b9763f2839e8693bd-10231934-images-thumbs&n=13" },
    { name: "Data Scientist", link: "https://avatars.mds.yandex.net/i?id=1c5870dc0f5812043f9fdebcae50eb631cd70711-10636447-images-thumbs&n=13" },
    { name: "Lawyer", link: "https://avatars.mds.yandex.net/i?id=9019012b014f64a0cfd3d2f11f3e274d92699584-10919901-images-thumbs&n=13" },
    { name: "Entrepreneur", link: "https://avatars.mds.yandex.net/i?id=443c146bc4ce3beebfe92ee0071a0d0dce2b5baf-5220723-images-thumbs&n=13" },
    { name: "Psychologist", link: "https://avatars.mds.yandex.net/i?id=162a8cd6ed70e7ff609f6f239ea2a4d8a7fb7227-12168040-images-thumbs&n=13" },
    { name: "Mechanical Engineer", link: "https://avatars.mds.yandex.net/i?id=eb91775b9f3d465b29151824a1b0f93af16463b1-4507718-images-thumbs&n=13" },
    { name: "Nurse", link: "https://avatars.mds.yandex.net/i?id=a63e14b0f0a63c41e1db61c7b9e0106c6ee489a9-5296267-images-thumbs&n=13" },
    { name: "Journalist", link: "https://avatars.mds.yandex.net/i?id=0d5ac5599323d96766368b55f40940808a208f82-9214095-images-thumbs&n=13" },
    { name: "Chef", link: "https://avatars.mds.yandex.net/i?id=d4a15aee107ea421df40053f79dfe81b_l-4375647-images-thumbs&n=13" },
    { name: "Photographer", link: "https://avatars.mds.yandex.net/i?id=274cfad2aa35418735410b90443b04a07e1b14fb-4146177-images-thumbs&n=13" },
    { name: "Electrician", link: "https://avatars.mds.yandex.net/i?id=cfea3969f4298733f4e83c6d70498b6e2c578130-4261963-images-thumbs&n=13" },
    { name: "Marketing Specialist", link: "https://avatars.mds.yandex.net/i?id=62455cfc22e0596188b4e6809561b96b586288b9-4546420-images-thumbs&n=13" },
    { name: "Environmental Scientist", link: "https://avatars.mds.yandex.net/i?id=f502b9a00c57fa4e3f4e8dc2a499ce72e97e3584-3986671-images-thumbs&n=13" },
    { name: "Accountant", link: "https://avatars.mds.yandex.net/i?id=52307be708b2fe4d6f7b6ef40b89fc42a2b5226f-9989050-images-thumbs&n=13" },
    { name: "Pilot", link: "https://avatars.mds.yandex.net/i?id=5b2223fa1db9ceb9bb2981786eb8007dcee6eb19-8000127-images-thumbs&n=13" },
    { name: "Pharmacist", link: "https://avatars.mds.yandex.net/i?id=475921341d1c61372e05c386f723edbe1c77553bd42016f9-4331709-images-thumbs&n=13" },
    { name: "Game Developer", link: "https://vkplay.ru/pre_0x736_resize/hotbox/content_files/Stories/2023/09/20/7e0d4eef8ad74a418bf0ef914039208b.jpg?quality=85" },
    { name: "Interior Designer", link: "https://avatars.mds.yandex.net/i?id=337a4ba324036db7eac4eddb8e10bc0c87b9f0bc-4521347-images-thumbs&n=13" },
    { name: "Social Worker", link: "https://avatars.mds.yandex.net/i?id=803aa92b7a0719283cd20adeb69d56415285aefb-9860570-images-thumbs&n=13" },
    { name: "Civil Engineer", link: "https://avatars.mds.yandex.net/i?id=dec2be90dfad4894bda6baa21fb1fc80ee7cd975-9211711-images-thumbs&n=13" },
    { name: "Fashion Designer", link: "https://avatars.mds.yandex.net/i?id=181bd52bfd79bde03206d1f1a866940e26e06bb46eca0af9-9837315-images-thumbs&n=13" },
    { name: "Biomedical Engineer", link: "https://avatars.mds.yandex.net/i?id=02f64f2fca7da6f2ab00995369ae7d21726508bf-5251249-images-thumbs&n=13" },
    { name: "Veterinarian", link: "https://avatars.mds.yandex.net/i?id=d59cdbf076abf3ac439367be4c7941041ec71406-9461766-images-thumbs&n=13" },
    { name: "Animator", link: "https://avatars.mds.yandex.net/i?id=b66d9baf51c6e5f7b1925a7ea757339f4ecedd4d-10385932-images-thumbs&n=13" },
    { name: "Financial Analyst", link: "https://avatars.mds.yandex.net/i?id=439d21e1eac76b14517f9d066fa18958ce6e8942-9146551-images-thumbs&n=13" },
    { name: "Event Planner", link: "https://avatars.mds.yandex.net/i?id=f360a3f9c3c0b5bbc487e55957582290dd91856b-12475985-images-thumbs&n=13" },
    { name: "Dentist", link: "https://avatars.mds.yandex.net/i?id=f8074ebd477007bb1d50c87d4222bb911313be76-12729258-images-thumbs&n=13" },
    { name: "Musician", link: "https://avatars.mds.yandex.net/i?id=6804db62ac9d6803aedf49270e50f1cf5fb31461-5194967-images-thumbs&n=13" },
    { name: "Librarian", link: "https://avatars.mds.yandex.net/i?id=b7b1e4ea611232e8db67fb79712563b2a5cb334c-5236060-images-thumbs&n=13" },
    { name: "Astronomer", link: "https://avatars.mds.yandex.net/i?id=0a7641cf0c2780e14092dc573acae56a8e59cd24-8320910-images-thumbs&n=13" },
    { name: "Real Estate Agent", link: "https://avatars.mds.yandex.net/i?id=911ff5302c9e5114a5b73952065bcf9b7ab2f677-5348026-images-thumbs&n=13" },
    { name: "Translator", link: "https://avatars.mds.yandex.net/i?id=56363251e37317330f33328c9c11b6001bbd4f97-5245014-images-thumbs&n=13" },
    { name: "Cybersecurity Specialist", link: "https://avatars.mds.yandex.net/i?id=611963fa50da9be55c57ee6217af62ca1f131a2e-9269077-images-thumbs&n=13" },
    { name: "Film Director", link: "https://avatars.mds.yandex.net/i?id=e848e901a272441e61ac906bbafecb445ca89ab8-5275995-images-thumbs&n=13" },
    { name: "Physiotherapist", link: "https://avatars.mds.yandex.net/i?id=7c4852473f1e751292e0f0263b01daf8529076981d967d91-10257510-images-thumbs&n=13" },
    { name: "Tour Guide", link: "https://avatars.mds.yandex.net/i?id=59fa3419ac9d62228cc02e187924b57ac58ea39a143ea8cd-10786048-images-thumbs&n=13" }

];

export default professions;