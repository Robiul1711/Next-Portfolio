"use server";

export const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "GET",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
};
