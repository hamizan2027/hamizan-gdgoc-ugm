import { atom } from 'nanostores';

export interface Track {
    id: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
    skills: string[];
    what_you_do: string;
    explore_link: string;
    open: boolean;
}

export const $tracks = atom<Track[]>([]);
export const $isLoading = atom<boolean>(true);
export const $error = atom<string | null>(null);

export async function fetchTracks() {
    $isLoading.set(true);
    $error.set(null);

    try {
        const response = await fetch('https://gdgoc-ugm-api.vercel.app/api/tracks');
        if (!response.ok) throw new Error('Network response was error');

        const result = await response.json();

        if (result.success) {
            $tracks.set(result.data);
        } else {
            $error.set("Failed to fetch data");
        }
    } catch (err) {
        $error.set(err instanceof Error ? err.message : "Failed to fetch data");
    } finally {
        $isLoading.set(false);
    }
}
