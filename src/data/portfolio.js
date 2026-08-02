import logosIconSet from "@iconify-json/logos/icons.json";
import mdiIconSet from "@iconify-json/mdi/icons.json";
import mdiLightIconSet from "@iconify-json/mdi-light/icons.json";
import simpleIconsSet from "@iconify-json/simple-icons/icons.json";
import solarIconSet from "@iconify-json/solar/icons.json";

const iconify = (set, name) => {
	const icon = set.icons[name];

	if (!icon) {
		throw new Error(`Missing Iconify icon: ${name}`);
	}

	const left = icon.left ?? 0;
	const top = icon.top ?? 0;
	const width = icon.width ?? set.width ?? 24;
	const height = icon.height ?? set.height ?? 24;

	return {
		viewBox: `${left} ${top} ${width} ${height}`,
		body: icon.body,
		mode: "raw",
	};
};

const solar = (name) => iconify(solarIconSet, name);
const logos = (name) => iconify(logosIconSet, name);
const mdi = (name) => iconify(mdiIconSet, name);
const mdiLight = (name) => iconify(mdiLightIconSet, name);
const simple = (name) => iconify(simpleIconsSet, name);

export const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Skills", href: "/skills" },
	{ label: "Projects", href: "/projects" },
	{ label: "Experience", href: "/experience" },
	{ label: "Contact", href: "/contact" },
];

export const services = [
	{
		title: "Web Development",
		copy: "Building responsive and performant web applications using modern frameworks.",
		icon: "serviceWeb",
	},
	{
		title: "Backend Development",
		copy: "Designing scalable APIs and backend services with robust architecture.",
		icon: "serviceBackend",
	},
	{
		title: "Mobile Development",
		copy: "Creating cross-platform mobile apps with excellent user experience.",
		icon: "serviceMobile",
	},
	{
		title: "Cloud & DevOps",
		copy: "Deploying and managing applications on AWS and Azure with CI/CD pipelines.",
		icon: "serviceCloud",
	},
	{
		title: "Database Design",
		copy: "Designing efficient database schemas and optimizing query performance.",
		icon: "serviceDatabase",
	},
];

export const homeHighlights = [
	{
		title: "Clean Code",
		copy: "Maintainable code that stays clear and easy to extend.",
		icon: "code",
	},
	{
		title: "Cloud Solutions",
		copy: "Scalable AWS and Azure systems built for real workloads.",
		icon: "serviceCloud",
	},
	{
		title: "Quality First",
		copy: "Reliable delivery with careful testing and attention to detail.",
		icon: "quality",
	},
	{
		title: "Problem Solver",
		copy: "Practical solutions for complex technical requirements.",
		icon: "solve",
	},
];

export const mobileBankingTech = [
	"Flutter",
	"Angular",
	"Amazon Cognito",
	"AWS Lambda",
	"Amazon API Gateway",
	"Amazon RDS Proxy",
	"AWS Secrets Manager",
	"Amazon Aurora",
	"Amazon SQS FIFO",
	"Amazon SNS",
	"Amazon DynamoDB",
	"TypeScript CDK",
];

export const flightProfileOptimizerTech = [
	".NET",
	"AWS Lambda",
	"AWS Step Functions",
	"Amazon DynamoDB",
	"Amazon S3",
	"Amazon API Gateway",
	"Amazon Cognito",
	"Amazon EventBridge Scheduler",
	"TypeScript CDK",
	"React Native",
	"Xamarin",
];

export const exchangeCounterTech = [
	"Rust",
	"Axum",
	"Next.js",
	"AWS Lambda",
	"Amazon API Gateway",
	"Amazon Cognito",
	"Amazon Aurora PostgreSQL",
	"Amazon RDS Proxy",
	"AWS Secrets Manager",
	"Amazon SQS",
	"AWS CDK",
];

export const featuredProjects = [
	{
		title: "Flight Profile Optimizer",
		tag: "Aerospace · AWS",
		copy: "A flight-optimization platform that processes operational airline data and generates trajectory options to reduce fuel burn while meeting flight constraints.",
		tech: flightProfileOptimizerTech,
		techLimit: 5,
		variant: "flight",
		href: "/projects/flight-profile-optimizer",
		fullReload: true,
		regionLimited: true,
	},
	{
		title: "Mobile Banking",
		tag: "AWS · Mobile · Web",
		copy: "Flutter Mobile Banking and Angular iBanking connected to a shared serverless AWS platform with secure authentication and a CQRS read model.",
		tech: mobileBankingTech,
		techLimit: 5,
		variant: "banking",
		href: "/projects/mobile-banking",
	},
	{
		title: "Rust Payment Event Pipeline",
		tag: "Backend · AWS",
		copy: "Serverless payment notification pipeline in Rust using AWS Lambda, SQS, and DynamoDB to handle high-volume events reliably.",
		tech: ["Rust", "Amazon API Gateway", "AWS Lambda", "Amazon SQS", "DynamoDB", "AWS CDK"],
		variant: "ingest",
		href: "/projects/rust-ingest",
		sourceHref: "https://github.com/HtetLinMaung/rust-ingest",
	},
	{
		title: "Exchange Counter",
		tag: "Ongoing · Rust · AWS",
		copy: "An ongoing foreign-exchange counter platform for rates, physical cash inventory, teller operations, reconciliation, and traceable financial records.",
		tech: exchangeCounterTech,
		techLimit: 5,
		variant: "exchange",
		href: "/projects/exchange-counter",
		sourceHref: "https://github.com/HtetLinMaung/exchange-counter",
	},
];

export const archiveProjects = [
	{
		title: "Watch Vault by Diggie",
		tag: "Closed Source",
		copy: "Flutter marketplace for authentic branded watches, backed by a Rust API with real-time communication and automated invoice generation.",
		tech: ["Flutter", "Rust", "InstantIO", "WebWand"],
		variant: "service",
	},
	{
		title: "WebWand",
		tag: "Web Automation",
		copy: "Node.js microservice for screenshots, scripted browser workflows, authenticated navigation, scraping, and form automation.",
		tech: ["Node.js", "Express", "Puppeteer", "Docker"],
		variant: "service",
		href: "https://github.com/HtetLinMaung/webwand",
		linkLabel: "View Repository",
	},
	{
		title: "InstantIO",
		tag: "Real-Time Service",
		copy: "Dockerized Socket.IO microservice for scalable, real-time communication in web applications.",
		tech: ["Node.js", "Socket.IO", "Docker"],
		variant: "service",
		href: "https://github.com/HtetLinMaung/instantio",
		linkLabel: "View Repository",
	},
	{
		title: "Report Forge",
		tag: "Document Service",
		copy: "Dockerized Rust service that converts HTML into formatted PDF reports using sitetopdf.",
		tech: ["Rust", "sitetopdf", "Docker"],
		variant: "service",
		href: "https://github.com/HtetLinMaung/report_forge",
		linkLabel: "View Repository",
	},
	{
		title: "LoadFire",
		tag: "Load Testing",
		copy: "Cross-platform Rust CLI for configurable HTTP load tests, including YAML scenarios and payloads sourced from CSV or Excel.",
		tech: ["Rust", "YAML", "CLI"],
		variant: "cli",
		links: [
			{ label: "GitHub", href: "https://github.com/HtetLinMaung/loadfire" },
			{ label: "npm", href: "https://www.npmjs.com/package/loadfire-rs" },
		],
	},
];

export const npmPackageGroups = [
	{
		title: "Document Tools",
		packages: [
			{ name: "sitetopdf", href: "https://www.npmjs.com/package/sitetopdf" },
			{ name: "sitetopdf-watcher", href: "https://www.npmjs.com/package/sitetopdf-watcher" },
			{ name: "pdfmix", href: "https://www.npmjs.com/package/pdfmix" },
		],
	},
	{
		title: "Web & Backend",
		packages: [
			{ name: "quickedit-table", href: "https://www.npmjs.com/package/quickedit-table" },
			{ name: "medictrl", href: "https://www.npmjs.com/package/medictrl" },
			{ name: "starless-loadtester", href: "https://www.npmjs.com/package/starless-loadtester" },
			{ name: "starless-server", href: "https://www.npmjs.com/package/starless-server" },
		],
	},
	{
		title: "Security & Location",
		packages: [
			{ name: "generateotp-ts", href: "https://www.npmjs.com/package/otp-generator-ts" },
			{ name: "nearby-locations-ts", href: "https://www.npmjs.com/package/nearby-locations-ts" },
		],
	},
	{
		title: "Myanmar Utilities",
		packages: [
			{
				name: "myanmar-operator-detector",
				href: "https://www.npmjs.com/package/myanmar-operator-detector",
			},
			{ name: "validate-myanmar-nrc", href: "https://www.npmjs.com/package/validate-myanmar-nrc" },
			{ name: "mm-money", href: "https://www.npmjs.com/package/mm-money" },
			{ name: "mm2engnum", href: "https://www.npmjs.com/package/mm2engnum" },
		],
	},
];

export const aboutDetails = [
	{
		icon: "pin",
		text: "Chiba, Japan",
	},
	{ icon: "cap", text: "West Yangon Technology University\nBE in Electronic Communication" },
	{ icon: "lang", text: "Languages\nEnglish, Burmese" },
];

export const stats = [
	{ value: "7+", label: "Years of Experience" },
	{ value: "AWS", label: "Cloud Engineering" },
	{ value: "10+", label: "Technologies" },
	{ value: "Global", label: "Team Experience" },
];

export const aboutFocus = [
	"Frontend interfaces that feel clear and usable",
	"Backend systems with maintainable structure",
	"AWS-based delivery with practical architecture",
	"Collaboration that keeps work moving forward",
];

export const skillGroups = [
	{
		title: "Programming Languages",
		items: [
			{ label: "TypeScript", icon: "skillTypeScript" },
			{ label: "JavaScript", icon: "skillJavaScript" },
			{ label: "Rust", icon: "skillRust" },
			{ label: "Java", icon: "skillJava" },
			{ label: "C#", icon: "skillCSharp" },
			{ label: "Python", icon: "skillPython" },
			{ label: "Go", icon: "skillGo" },
		],
	},
	{
		title: "Frontend",
		items: [
			{ label: "React", icon: "skillReact" },
			{ label: "React Native", icon: "skillReact" },
			{ label: "Xamarin", icon: "skillXamarin" },
			{ label: "Next.js", icon: "skillNextjs" },
			{ label: "Astro.js", icon: "skillAstro" },
			{ label: "Vue.js", icon: "skillVue" },
			{ label: "Flutter", icon: "skillFlutter" },
			{ label: "Tailwind CSS", icon: "skillTailwind" },
		],
	},
	{
		title: "Backend",
		items: [
			{ label: "Node.js", icon: "skillNodejs" },
			{ label: ".NET", icon: "skillDotnet" },
			{ label: "Spring Boot", icon: "skillSpring" },
			{ label: "Axum", icon: "skillAxum" },
			{ label: "Express", icon: "skillExpress" },
		],
	},
	{
		title: "Databases",
		items: [
			{ label: "PostgreSQL", icon: "skillPostgres" },
			{ label: "MongoDB", icon: "skillMongodb" },
			{ label: "MySQL", icon: "skillMysql" },
			{ label: "Redis", icon: "skillRedis" },
			{ label: "DynamoDB", icon: "skillDynamodb" },
		],
	},
	{
		title: "Cloud & DevOps",
		items: [
			{ label: "AWS", icon: "skillAws" },
			{ label: "Lambda", icon: "skillAwsLambda" },
			{ label: "API Gateway", icon: "skillAwsApiGateway" },
			{ label: "Step Functions", icon: "skillAwsStepFunctions" },
			{ label: "SQS", icon: "skillAwsSqs" },
			{ label: "SNS", icon: "skillAwsSns" },
			{ label: "EventBridge", icon: "skillAwsEventBridge" },
			{ label: "DynamoDB", icon: "skillDynamodb" },
			{ label: "S3", icon: "skillAwsS3" },
			{ label: "CloudWatch", icon: "skillAwsCloudWatch" },
			{ label: "TypeScript CDK", icon: "skillAwsCloudFormation" },
			{ label: "Azure", icon: "skillAzure" },
			{ label: "Docker", icon: "skillDocker" },
			{ label: "GitLab CI", icon: "skillGitlab" },
			{ label: "GitHub Actions", icon: "skillGithubActions" },
			{ label: "Nginx", icon: "skillNginx" },
			{ label: "Datadog", icon: "skillDatadog" },
		],
	},
	{
		title: "Tools & Others",
		items: [
			{ label: "Git", icon: "skillGit" },
			{ label: "Linux", icon: "skillLinux" },
			{ label: "Azure DevOps", icon: "skillAzure" },
		],
	},
];

export const experienceItems = [
	{
		period: "Jun 2024 - Dec 2025",
		title: "Software Engineer / Cloud Engineer",
		org: "Nextstep Engineering Software Solutions",
		details: [
			"Maintained and enhanced an AWS-based Flight Profile Optimizer that processes operational airline data and generates trajectory options to reduce fuel burn while meeting flight constraints.",
			"Developed the .NET/C# serverless platform with Lambda, API Gateway, Step Functions, DynamoDB, and S3, and maintained its React Native and Xamarin pilot iPad clients.",
			"Implemented complex aerospace requirements while collaborating with a multinational team across Germany, Italy, Thailand, and Ukraine.",
			"Built event-driven workflows using S3 Event Notifications for object creation, DynamoDB Streams for item inserts and updates, plus SQS, SNS, and EventBridge. Deployed infrastructure using TypeScript CDK.",
			"Resolved CloudFormation's 500-resource limit using nested stacks to simplify maintenance.",
			"Monitored Flight Profile Optimizer production environments for multiple customers using Amazon CloudWatch Logs and Datadog, verified service health, and escalated critical errors and warnings.",
		],
		tech: ".NET, AWS, React Native, Xamarin, TypeScript CDK, Step Functions, SQS, SNS, EventBridge, DynamoDB Streams, S3 Event Notifications, CloudWatch Logs, Datadog",
	},
	{
		period: "Nov 2020 - May 2024",
		title: "Software Developer / Team Lead",
		org: "Myanmar Information Technology",
		details: [
			"Led development of a mobile banking platform with a Java backend on Azure Functions and Azure SQL Database, and a Flutter mobile frontend.",
			"Delivered iBanking using the same backend services with an Angular frontend.",
			"Led development of a mobile wallet using Node.js, AWS Lambda, Amazon Cognito, PostgreSQL, and Flutter.",
			"Built an exchange counter application using Node.js, AWS Lambda, Amazon Cognito, PostgreSQL, and Angular.",
		],
		tech: "Java, Azure Functions, Azure SQL Database, Flutter, Angular, Node.js, AWS Lambda, Amazon Cognito, PostgreSQL",
	},
	{
		period: "Oct 2018 - Oct 2020",
		title: "Frontend Developer",
		org: "Thetys",
		details: [
			"Built single-page applications with Vue.js, Vuetify, and Vuex from detailed interface designs.",
			"Improved usability and performance across browsers, screen sizes, and device types.",
		],
		tech: "Vue.js, Vuetify, Vuex",
	},
];

export const contactItems = [
	{
		icon: "contactEmail",
		label: "Email",
		value: "jsthtet96@gmail.com",
	},
	{ icon: "contactLocation", label: "Location", value: "Chiba, Japan" },
	{
		icon: "linkedin",
		label: "LinkedIn",
		value: "linkedin.com/in/htet-lin-maung-5b544a269",
		href: "https://www.linkedin.com/in/htet-lin-maung-5b544a269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
	},
	{
		icon: "github",
		label: "GitHub",
		value: "github.com/HtetLinMaung",
		href: "https://github.com/HtetLinMaung",
	},
];

export const icons = {
	download: solar("download-linear"),
	arrow: solar("alt-arrow-right-linear"),
	mail: solar("letter-linear"),
	statusSuccess: solar("check-circle-bold"),
	statusError: solar("danger-circle-bold"),
	statusLoading: mdi("loading"),
	contactEmail: logos("google-gmail"),
	contactLocation: logos("google-maps"),
	github: simple("github"),
	linkedin: simple("linkedin"),
	code: solar("code-linear"),
	quality: solar("shield-check-linear"),
	solve: solar("magnifer-linear"),
	serviceWeb: solar("code-square-linear"),
	serviceBackend: solar("server-2-linear"),
	serviceMobile: solar("smartphone-linear"),
	serviceCloud: solar("cloud-linear"),
	serviceDatabase: solar("database-linear"),
	pin: solar("map-point-linear"),
	cap: solar("book-2-linear"),
	lang: solar("translation-2-linear"),
	user: solar("user-linear"),
	up: solar("alt-arrow-up-linear"),
	skillTypeScript: logos("typescript-icon"),
	skillJavaScript: logos("javascript"),
	skillPython: logos("python"),
	skillJava: logos("java"),
	skillCSharp: simple("csharp"),
	skillRust: logos("rust"),
	skillGo: `<path d="M5 13h8.5" /><path d="M15 10.2c2.2 0 4 1.6 4 3.6s-1.8 3.7-4 3.7c-1.8 0-3.2-.8-4.1-2" /><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="11" cy="10" r="1" fill="currentColor" stroke="none" />`,
	skillDart: `<path d="M8 5.5h5l3 3v5l-3 5H8l3-5V8.5Z" /><path d="M11 8.5h5" />`,
	skillReact: logos("react"),
	skillXamarin: logos("xamarin"),
	skillNextjs: logos("nextjs-icon"),
	skillVue: logos("vue"),
	skillFlutter: logos("flutter"),
	skillTailwind: logos("tailwindcss-icon"),
	skillNodejs: logos("nodejs-icon"),
	skillAstro: logos("astro-icon"),
	skillDotnet: logos("dotnet"),
	skillSpring: logos("spring-icon"),
	skillAxum: `<circle cx="12" cy="12" r="7" /><path d="m8.5 15.5 3.5-7 3.5 7M9.8 13h4.4" />`,
	skillExpress: simple("express"),
	skillPostgres: logos("postgresql"),
	skillMongodb: logos("mongodb-icon"),
	skillMysql: logos("mysql-icon"),
	skillRedis: logos("redis"),
	skillDynamodb: simple("amazondynamodb"),
	skillAws: simple("amazonwebservices"),
	skillAwsLambda: logos("aws-lambda"),
	skillAwsApiGateway: logos("aws-api-gateway"),
	skillAwsStepFunctions: logos("aws-step-functions"),
	skillAwsSqs: logos("aws-sqs"),
	skillAwsSns: logos("aws-sns"),
	skillAwsEventBridge: logos("aws-eventbridge"),
	skillAwsS3: logos("aws-s3"),
	skillAwsCloudWatch: logos("aws-cloudwatch"),
	skillAwsCloudFormation: logos("aws-cloudformation"),
	bankFlutter: logos("flutter"),
	bankAngular: logos("angular-icon"),
	bankApiGateway: logos("aws-api-gateway"),
	bankCognito: logos("aws-cognito"),
	bankLambda: logos("aws-lambda"),
	bankCloudFront: logos("aws-cloudfront"),
	bankS3: logos("aws-s3"),
	bankSqs: logos("aws-sqs"),
	bankSns: logos("aws-sns"),
	bankDynamoDb: logos("aws-dynamodb"),
	bankRdsProxy: logos("aws-rds"),
	bankAurora: logos("aws-aurora"),
	bankSecretsManager: logos("aws-secrets-manager"),
	bankVpn: logos("aws-vpc"),
	fpoAirline: mdi("airplane"),
	bankCore: mdiLight("bank"),
	bankLock: solar("lock-keyhole-linear"),
	skillAzure: simple("microsoftazure"),
	skillDocker: logos("docker-icon"),
	skillGitlab: logos("gitlab-icon"),
	skillGithubActions: simple("githubactions"),
	skillNginx: logos("nginx"),
	skillDatadog: logos("datadog"),
	skillGit: logos("git-icon"),
	skillLinux: simple("linux"),
	skillKafka: `<path d="M9 6v12M15 8.5v7M15 8.5l3-2M15 15.5l3 2M9 12h6" />`,
	skillRabbitmq: `<path d="M7 9.5 12 6l5 3.5v5L12 18l-5-3.5v-5Z" /><path d="M9.2 9.5v4M12 8.2v7M14.8 9.5v4" />`,
	skillTesseract: `<rect x="5" y="6" width="14" height="12" rx="2.5" /><path d="M8 9h8M12 9v6M10 15h4" />`,
};
