const projects = [
	{
		id: 5,
		title: "ScruberJay",
		studyLink: {
			type: "case-study", // can be "case-study" or "external"
			label: "Case Study",
			url: "scrubberJayCaseStudy.html", // for case study, we'll append the ID
		},
		subHeading: "Household Food Waste Management Application",
		topImg: "/images/.webp/Scruberjay/MainPage/1.webp",
		timeline: "September 2021-December 2021",
		clientSupport: [
			"HPI School of Design Thinking",
			"Hasso Plattner Institute, Germany",
		],

		team: [
			"Bareen Parvez",
			"Clara Grunwald",
			"Lars Massaneck",
			"Leaonard Paetzmann",
		],
		roles: ["Research", "User Experience Design", "User Interface Design"],
		overview: {
			text: `ScruberJay is a digital solution aimed at reducing household food waste by streamlining grocery management. 
            The app syncs with supermarket chains to automatically track users' purchases, offering storage tips, expiry 
            reminders, and quick meal suggestions using ingredients on hand. By leveraging machine learning, ScruberJay predicts 
            the shelf life of perishable items and helps users make the most of their groceries before they spoil. This seamless 
            ecosystem connects supermarkets and consumers, making food management more efficient and sustainable.`,
			images: [
				"/images/Frame 112.png",
				"/images/Frame 205.png",
				"/images/iOS app dock.png",
			],
		},

		functions: [
			{
				title: "Import purchased groceries with storage tips",
				description: `The application allows users to get their purchased groceries imported through a barcode that the 
                cashier scans at the supermarket checkout, suggesting storage ideas for the purchased perishable food. Alternatively, 
                the QR code/barcode scanner on the application allows the user to scan their receipt’s code in case they missed 
                getting it scanned at the counter.`,
				image: "/images/Frame 206.png",
			},
			{
				title: "Alerts when food is expiring with recommended recipes",
				description: `Throughout the week, ScruberJay reminds the user what to use up on which day and recommends dishes 
                built to their taste and dietary restraints with what is left in their pantry.`,
				image: "/images/Frame 208.png",
			},
			{
				title: "Dashboard with pantry status",
				description: `The dashboard has an overview of the remaining food in the pantry with recommended recipes to cook 
                with the available food.`,
				image: "/images/Frame 200.png",
			},
			{
				title: "Grocery recommendations for future shopping",
				description: `Based on saved recipes & dietary restraints logged in the application, the app recommends groceries 
                for future shopping rounds.`,
				image: "/images/Frame 202.png",
			},
		],
		caseStudy: {
			problemStatement: {
				background: {
					title: "Background",
					text: "The project was an introductory part of the design thinking program at HPI School of Design Thinking where the ideas were created by a multidisciplinary team of students. Each team member was required to work largely equally on every aspect of the development of the final product and learn the process involved in solving a problem using design thinking through a practical challenge.",
					designChallenge:
						"Redesign household food waste practices in a world with different eating habits and dietary constraints.",
				},
				image: "/images/problem-img.png",
			},
			research: {
				title: "Research & Findings",
				sections: [
					{
						title: "Understand",
						text: "After receiving our challenge we deconstructed it and came to a shared understanding of what each component of the challenge meant to us...",
						facts: [
							"Over 1⁄3 of all food produced around the world goes to waste",
							"The annual value of food wasted globally estimates one trillion Dollars",
							"An area larger than china is used to grow food that is never eaten every day",
							"25 percent of the worlds fresh water supply is used to grow food that is never eaten",
							"With only one quarter of the food that is wasted only in Europe we could feed all starving people in the world",
						],
						image: "/images/research-img.png",
					},
					{
						title: "Observations",
						text: "Once we've gotten an understanding that food waste is one of the many issues at the crossroads of climate change and social injustices, we had to see it with our own eyes.",
						observationPoints: [
							{
								type: "Observe",
								description:
									"The team watched people while shopping at a generic grocery store...",
							},
							{
								type: "Immerse",
								description:
									"But in order to really get an overview we had to go out into the world ourselves...",
							},
							{
								type: "Interview",
								description:
									"To ultimately round off this process, the team pulled out pen and paper...",
							},
						],
						image: "/images/observe-img.png",
					},
				],
			},
			prototype: {
				title: "Prototype",
				goal: {
					title: "The goal?",
					text: "How can we give our users an experience so that they are really ready to be foodwaste heroes without worrying about what data they share with us and actually be happy about receiving the notifications?",
				},
				storyboard: {
					title: "Storyboard & user journal",
					text: "To map out how the user would interact with the application & what features should be added to ScruberJay, we started off by driving our the user journey and the corresponding storyboard for the user",
					images: [
						{
							src: "/images/prot2.png",
							caption:
								"The corresponding storyboard explaining how the user would ideally interact with ScruberJay",
						},
						{
							src: "/images/prot3.png",
							caption: "User journey map",
						},
						{
							src: "/images/prot4.png",
							caption: "High fidelity prototypes",
						},
					],
				},
			},
			// Add other sections similarly...
		},
	},
	{
		id: 1,
		title: "Councelopedia",
		studyLink: {
			type: "case-study",
			label: "Case Study",
			url: "councelopediaCaseStudy.html",
		},
		subHeading: "Digital Tool for Young Migrants in Germany",
		topImg: "/images/.webp/Councelpedia/Mainpage/Find a counselor 1.webp",
		timeline: "December 2021- March 2022",
		clientSupport: [
			"Hasso Plattner Institute, Germany",
			"Judenmigrationdientse, Germany",
		],
		team: [
			"Bareen Parvez",
			"Chris Bower",
			"Deniz Calhan",
			"Leon Bien",
			"Marie Janda",
		],
		roles: ["Research", "User Experience Design", "User Interface Design"],
		overview: {
			text: `The Jugend Migration Dienste (JMD), an organization that supports young migrants in their integration process in Germany, faces significant challenges in delivering effective counseling services. Language barriers and geographical distances between counselors and clients hinder the process, making it difficult to provide timely and personalized support. While digitalization presents a potential solution, the path to implementing it remains unclear. JMD is in need of a fresh approach to digitize its counseling services and better support young migrants in settling down in Germany. Councelopedia is a digital platform designed to streamline the connection between migrants and the most suitable counselor for their specific needs. By virtually integrating all of JMD's offices, Councelopedia expands the pool of available counselors, allowing clients to find experts based on language proficiency, specialized knowledge, or availability. Additionally, the platform facilitates connections with external advisors beyond JMD. The prototype focuses on optimizing the client’s experience, ensuring that migrants can quickly and easily get in touch with the right counselor. Target audience: Clients of JMD | migrants | between 12-27 years old | in need of support to integrate in Germany`,
			images: ["/images/.webp/Councelpedia/Mainpage/Onboarding-1.webp"],
		},

		functions: [
			{
				title: "Onboarding",
				description: `After choosing the preferred language, the client can click through explanatory slides which show what JMD offers, what JMD is and what the web application can be used for. Since the service is only for young adults from 12 to 27 years of age, the homepage provides an external link to the services for people above 27.`,
				image: [
					"/images/.webp/Councelpedia/Mainpage/Onboarding-1.webp",
					"/images/.webp/Councelpedia/Mainpage/Onboarding-2.webp",
				],
			},
			{
				title: "Find a counselor",
				description: `The user gets the option to fill in a form which helps to find their perfect counselor match. They will then in the next step be provided with a list of counselors from all over Germany speaking their language and are able to choose and contact one. The list can be sorted for instance by how close the counselors are. This function relies on the internal changes JMD has to  make: pooling their resources and having a shared data basis of all  their counselors. The clients have various contact options: they can call  the counselor directly via a browser call, write them an email or make  an appointment. Here again, they can choose between an appointment  for a call, video call or on- site. After verifying with their email  address or phone number, they get a confirmation of their appointment on the website as well as per email / SMS.`,
				image: [
					"/images/.webp/Councelpedia/Mainpage/Find a counselor 1.webp",
					"/images/.webp/Councelpedia/Mainpage/Find a counselor 2.webp",
					"/images/.webp/Councelpedia/Mainpage/Find a counselor 3.webp",
					"/images/.webp/Councelpedia/Mainpage/Find a counselor 4.webp",
				],
			},
			{
				title: "Personal dashboard",
				description: `Once the user creates an account, they get access to a dashboard which  shows all important information at a glance with special focus on the key data about upcoming appointments`,
				image: [
					"images/.webp/Councelpedia/Mainpage/Personal-dashboard-1.webp",
					"images/.webp/Councelpedia/Mainpage/Personal-dashboard2.webp",
				],
			},
			{
				title: "Forums & connections",
				description: `The forums page offers clients to get information from the wider community of JMD clients without having to contact a counsellor.`,
				image: [
					"images/.webp/Councelpedia/Mainpage/Forums & connections 1.webp",
					"images/.webp/Councelpedia/Mainpage/Forums & connections 2.webp",
				],
			},
		],
		impact: {
			sections: [
				{
					heading: "Quicker access to counseling ",
					body: "Clients can connect with a suitable counselor faster by pooled JMD offices, reducing delays and making it easier to find someone with the right language skills and expertise across their database.",
				},
				{
					heading: "Language flexibility",
					body: "Clients can choose their preferred language from the start to access the tool, or communicate with the counselor, ensuring effective communication and reducing misunderstandings.",
				},
				{
					heading: "Efficient workload management",
					body: "The platform allows for better distribution of counseling tasks between multiple JMD offices, enabling the organisation to hire more counselors and balance workloads, which improves service quality.",
				},
				{
					heading: "Multiple services in one place",
					body: "Counselopedia combines counseling, forums, language course searches, and more into a single platform, reducing the need for clients to use multiple tools.",
				},

				{
					heading: "Multilingual support",
					body: "From the outset, users can select their native language to access the platform, making them feel comfortable and eliminating language barriers from the start.",
				},
				{
					heading: "",
					body: "Feedback from JMD’s leadership and stakeholders confirmed the project's high value and potential, as shown through the high-fidelity prototypes leading to its integration into JMD’s service strategy. Once my program term concluded, we handed over the project and PRD to JMD’s internal product team to further develop the foundation we established.",
				},
				{
					heading: "",
					body: "In addition to the user-oriented design, we developed a detailed Implementation Guide, outlining the solution’s use cases and a step-by-step plan for integration. Though the prototypes primarily focused on the user side, we included a blueprint in the PRD for how the interface should appear from the employee’s perspective, supporting JMD’s future developments.`,",
				},
			],
		},
	},
	{
		id: 4,
		title: "Silence",
		studyLink: {
			type: "external",
			label: "Read Documentation",
			url: "https://example.com/documentation", // external URL
		},
		subHeading: "Associations from the Valley of Kashmir",
		topImg: "/images/.webp/Silence/Cover.webp",
		timeline: "October 2023 - January 2024",
		clientSupport: ["Bauhaus University Weimar"],
		team: ["Bareen Parvez"],
		roles: ["Interface design", "Physical computing", "Installation design"],
		overview: {
			text: `The project "Silence: Associations from the Valley of Kashmir" explores the  emotions and narratives associated within the concept of self-expression in Kashmir, where silence, though often imposed, has emerged as a crucial mechanism for survival and security. At its core, the installation uses vernacular Kashmiri script, serving as a conduit for the complex emotions and narratives surrounding silence in the region. Through an interplay of light and sound, the installation responds dynamically to its environment, where in the absence of sound, the words 'ċhọpü kạrzi' ('stay silent' in Kashmiri) fade into darkness, echoing the prevailing notion that silence is often synonymous with safety. Within the socio-political landscape of Indian-occupied Kashmir, where dissent is met with suppression and censorship, the imperative to remain silent often emanates from a genuine fear for personal safety.
      Read documentation`,
			images: ["/images/.webp/Silence/1.webp"],
		},
	},
	{
		id: 3,
		title: "Solar Impressions",
		studyLink: {
			type: "external",
			label: "Read Documentation",
			url: "https://example.com/documentation", // external URL
		},
		subHeading: "Energy Harvesting & Data Visualisation",
		topImg: "/images/.webp/SolarImpressions/SolarImpressions.webp",
		timeline: "April 2024 - July 2024",
		clientSupport: ["Bauhaus University Weimar"],
		team: ["Bareen Parvez"],
		scopeOfProject: [
			"Data visualisation",
			"Physical computing",
			"Installation design",
		],
		overview: {
			text: `"Solar Impressions" is a digital installation that turns real-time sunlight data into a visual experience intending to make the often overlooked aspects of nature, like sunlight, more tangible and relatable through art while drawing inspiration from the interrelated phenomena of solar flares and aurora borealis. The resulting data sculpture is a bridge between the digital and natural worlds, exploring how data visualization can be used to represent and reinterpret our relationship with sustainable energy. 

The visuals are programmed to respond to live sunlight data collected by a light-dependent resistor (LDR) sensor. As the LDR measures the intensity of light in its environment, this data feeds into the visual system, directly influencing the patterns and colours displayed on the screen. On bright, sunny days, the installation displays vibrant colours—deep reds, fiery oranges, and glowing yellows—reflecting the intensity and energy of the sunlight. As the light diminishes, the colours gradually shift to cooler blues and greys, representing the diminishing gradients of an aurora.
`,
			images: [
				"images/.webp/SolarImpressions/1.webp",
				"images/.webp/SolarImpressions/2.webp",
				"images/.webp/SolarImpressions/3.webp",
				"images/.webp/SolarImpressions/4.webp",
			],
		},
	},

	{
		id: 2,
		title: "UNILaundry",
		studyLink: {
			type: "external",
			label: "Read Documentation",
			url: "https://example.com/documentation", // external URL
		},
		subHeading: "Student Dormitory Laundry Companion",
		topImg: "/images/.webp/UNILaundry/UNILaundry.webp",
		timeline: "August 2024",
		clientSupport: ["Bauhaus Summer School 2024"],
		team: ["Bareen Parvez"],
		scopeOfProject: [
			"Visual design",
			"User Experience Design",
			"Interface Design",
			"Variable type",
			"Animation",
			"Coding",
		],
		overview: {
			text: `UNILaundry is a mobile application aimed at simplifying dormitory laundry management for students. The app notifies users when their laundry is done and provides real-time updates on the availability of washing machines and dryers. It’s a manual solution that relies on students diligently updating their machine usage, helping to schedule and manage laundry tasks more efficiently. The app doesn’t control or reserve the machines, as it was designed within the limitations of the existing laundry setup, where machine mechanisms cannot be altered. The app was designed incorporating Bauhaus-inspired design elements in the user interface—drawing on the works of Bauhaus Masters and students to create a modular and functional interface. Additionally, I explored basic animations with variable type using CSS for a more engaging & delightful user experience.`,
			images: [
				"/images/.webp/UNILaundry/1.webp",
				"/images/.webp/UNILaundry/2.webp",
				"/images/.webp/UNILaundry/3.webp",
			],
		},

		functions: [
			{
				title: "Live update on laundry availability",
				description: `The app provides real-time updates on the availability of washing machines and dryers in the dormitory laundry hall. Users can quickly check which machines are in use and which are free, helping them plan their laundry trips more efficiently. This manual update system depends on students marking machines as in use or available, ensuring a smoother laundry experience for everyone.`,
				image: ["/images/.webp/UNILaundry/8.webp"],
			},
			{
				title: "In-app timer",
				description: `The app features a built-in timer that allows users to track the progress of their laundry cycles. Once a user starts a machine, they can set a timer to receive a notification when their load is done, ensuring they pick up their laundry promptly. To enhance the user experience, the app offers Dynamic Island notification options (for iOS), keeping users informed without needing to check the app constantly. This helps users manage their time effectively and prevents machine hogging in busy dorms.`,
				image: ["/images/.webp/UNILaundry/9.webp"],
			},
			{
				title: "Notifications when laundry is done or is available to use",
				description: `The app sends notifications to alert users when their laundry is finished, ensuring they pick it up on time. Additionally, for machine availability, users can enable a one-time notification feature for any occupied machine. This feature sends a reminder when that specific machine becomes available, helping users plan their laundry better. Once the notification is triggered, it disables automatically, ensuring a smooth and non-intrusive experience.`,
				image: [
					"/images/.webp/UNILaundry/10.webp",
					"/images/.webp/UNILaundry/11.webp",
				],
			},
		],
	},
	{
		id: 6,
		title: "Trend Report ‘23",
		studyLink: {
			type: "external",
			label: "Read Documentation",
			url: "https://example.com/documentation", // external URL
		},
		subHeading: "Annual Graphic Design Trend Report",
		topImg: "/images/.webp/TrendReport/1.webp",
		timeline: "January 2023",
		clientSupport: ["Jumpinggoose Design Activists, Bengaluru, India"],
		team: ["Bareen Parvez"],
		scopeOfProject: ["Trend research", "Content writing", "Editorial design"],
		overview: {
			text: `"The 2023 Graphic Design Trend Report offers a detailed look into the current visual communication landscape, highlighting how technological growth and a celebration of individuality are shaping design.

As the lead designer on this solo project, I was responsible for overseeing the entire development of the studio’s first edition of the report. This included conducting in-depth trend research, content writing and establishing the visual identity of the publication. The final report serves both as an internal guide for the agency and a source of inspiration for the broader design community.
`,
			images: [
				"/images/.webp/TrendReport/2.webp",
				// "/images/.webp/TrendReport/3.webp",
				// "/images/.webp/TrendReport/4.webp",
			],
		},
	},
];

const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

// Find the project with the matching ID
const selectedProject = projects.find((project) => project.id === projectId);
console.log(projectId);

// Dynamically add the project details to the HTML
if (selectedProject) {
	document.querySelector(".scruber-title").textContent = selectedProject.title;
	document.querySelector(".first-line").textContent =
		selectedProject.subHeading;
	document.querySelector(".timeline p").textContent = selectedProject.timeline;

	const studyLinkContainer = document.querySelector("a.case-study");
	if (selectedProject.studyLink) {
		const { type, label, url } = selectedProject.studyLink;
		studyLinkContainer.querySelector("span").textContent = label;

		if (type === "case-study") {
			studyLinkContainer.href = url;
		} else {
			studyLinkContainer.href = url;
			// Optionally add target="_blank" for external links
			studyLinkContainer.target = "_blank";
			studyLinkContainer.rel = "noopener noreferrer";
		}
		studyLinkContainer.classList.remove("hidden");
	} else {
		// If no study link is provided, hide the button
		studyLinkContainer.classList.add("hidden");
	}

	document.querySelector(".client-list").innerHTML =
		selectedProject.clientSupport
			.map(
				(client) => `<p style="
            font-size: 1rem !important;
            font-weight: 400 !important;
            line-height: 1.375rem !important;
          ">${client}</p>`
			)
			.join("");
	document.querySelector(".team-list").innerHTML = selectedProject.team
		.map(
			(member) => `<p style="
              font-size: 1rem !important;
              font-weight: 400 !important;
              line-height: 1.375rem !important;
            ">${member}</p>`
		)
		.join("");
	const roleSection = document.querySelector(".myRole");
	const roleTitleElement = roleSection.querySelector("h4");
	const roleListElement = roleSection.querySelector(".role-list");

	// Check if project has roles or scope of project
	if (selectedProject.roles) {
		// Project has roles
		roleTitleElement.textContent = "My Roles";
		roleListElement.innerHTML = selectedProject.roles
			.map(
				(role) => `<p style="
            font-size: 1rem !important;
            font-weight: 400 !important;
            line-height: 1.375rem !important;
          ">${role}</p>`
			)
			.join("");
	} else if (selectedProject.scopeOfProject) {
		// Project has scope
		roleTitleElement.textContent = "Scope of Project";
		roleListElement.innerHTML = selectedProject.scopeOfProject
			.map(
				(scope) => `<p style="
            font-size: 1rem !important;
            font-weight: 400 !important;
            line-height: 1.375rem !important;
          ">${scope}</p>`
			)
			.join("");
	}

	document.querySelector(".topImg").src = selectedProject.topImg;

	// Add the overview content
	document.querySelector(".overview-content p").textContent =
		selectedProject.overview.text;
	selectedProject.overview.images.forEach((imgSrc, index) => {
		document.querySelector(`.overimg${index + 1}`).src = imgSrc;
	});

	// Add functions dynamically
	const functionsContainer = document.querySelector(".functions-content");
	functionsContainer.innerHTML = "";
	selectedProject.functions?.forEach((func) => {
		functionsContainer.innerHTML += `
      <div class="function-container">
        <h2 class="font-regular-24">${func.title}</h2>
        <p class="font-regular-16">${func.description}</p>
		${func.image?.map((imgSrc, index) => {
			return `<img src="${imgSrc}" alt="${func.title}" index=${index} class="func-img" />`;
		})}
      </div>
    `;
	});

	// Add impact sections dynamically
	if (selectedProject.impact?.sections) {
		const impactContainer = document.querySelector(".impact-sections");
		impactContainer.innerHTML = "";
		selectedProject.impact.sections.forEach((section) => {
			const sectionHTML = `
        <div class="impact-section">
          ${
						section.heading
							? `<h2 class="font-medium-18">${section.heading}</h2>`
							: ""
					}
          <p class="font-regular-16">${section.body}</p>
        </div>
      `;
			impactContainer.innerHTML += sectionHTML;
		});
	} else {
		// If there's no impact section, hide the entire impact container
		document.querySelector(".impact").style.display = "none";
	}
} else {
	console.error("Project not found");
}
