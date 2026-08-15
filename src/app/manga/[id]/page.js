import ClientPage from "./ClientPage";
import projects from "../../../data/projects.json";

const SITE_URL = "https://yashsrivastava.design";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    const title = `${project.title} — Manga View`;
    const description = `Manga-style showcase of ${project.title} by Yash Srivastava.`;

    return {
        title,
        description,
        openGraph: {
            title: `${project.title} | Yash Srivastava Portfolio`,
            description,
            url: `${SITE_URL}/manga/${id}`,
            type: "article",
            images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Yash Srivastava`,
            description,
            images: project.image ? [project.image] : [],
        },
        alternates: {
            canonical: `${SITE_URL}/manga/${id}`,
        },
    };
}

export default async function Page({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return <ClientPage project={project} />;
}
