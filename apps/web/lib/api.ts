// apps/web/lib/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.zarasglobal.com/v1";

interface FetchOptions extends RequestInit {
  token?: string;
}

async function fetchApi<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { token, headers, ...customOptions } = options;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(headers as Record<string, string>),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: defaultHeaders,
    ...customOptions,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `Erreur API: ${response.status} ${response.statusText}`);
  }

  // Si la réponse est vide (ex: 204 No Content)
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

export const api = {
  // Projets
  projects: {
    getAll: () => fetchApi<any[]>("/projects"),
    getById: (id: string) => fetchApi<any>(`/projects/${id}`),
    create: (data: any, token: string) =>
      fetchApi<any>("/projects", { method: "POST", body: JSON.stringify(data), token }),
    update: (id: string, data: any, token: string) =>
      fetchApi<any>(`/projects/${id}`, { method: "PUT", body: JSON.stringify(data), token }),
    delete: (id: string, token: string) =>
      fetchApi<void>(`/projects/${id}`, { method: "DELETE", token }),
  },

  // Actualités
  news: {
    getAll: () => fetchApi<any[]>("/news"),
    getById: (id: string) => fetchApi<any>(`/news/${id}`),
    create: (data: any, token: string) =>
      fetchApi<any>("/news", { method: "POST", body: JSON.stringify(data), token }),
    update: (id: string, data: any, token: string) =>
      fetchApi<any>(`/news/${id}`, { method: "PUT", body: JSON.stringify(data), token }),
    delete: (id: string, token: string) =>
      fetchApi<void>(`/news/${id}`, { method: "DELETE", token }),
  },

  // Documents officiels
  documents: {
    getAll: () => fetchApi<any[]>("/documents"),
    create: (data: any, token: string) =>
      fetchApi<any>("/documents", { method: "POST", body: JSON.stringify(data), token }),
    delete: (id: string, token: string) =>
      fetchApi<void>(`/documents/${id}`, { method: "DELETE", token }),
  },

  // Partenariats & Contacts
  contact: {
    submitMessage: (data: { name: string; email: string; subject: string; message: string }) =>
      fetchApi<{ success: boolean }>("/contact", { method: "POST", body: JSON.stringify(data) }),
    submitPartnership: (data: any) =>
      fetchApi<{ success: boolean }>("/partnerships", { method: "POST", body: JSON.stringify(data) }),
  },
};