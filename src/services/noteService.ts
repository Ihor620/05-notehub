import axios from "axios";
import type { Note } from "../types/note";

const API_URL = "https://notehub-public.goit.study/api";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}


export const fetchNotes = async (
  page: number,
  search?: string
): Promise<FetchNotesResponse> => {
  const { data } = await instance.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage: 12,
      search,
    },
  });

  return data;
};


export const createNote = async (
  note: Omit<Note, "id" | "createdAt" | "updatedAt">
): Promise<Note> => {
  const { data } = await instance.post<Note>("/notes", note);
  return data;
};


export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await instance.delete<Note>(`/notes/${id}`);
  return data;
};