import supabase from "./supabase";

export const signUp = async (email, password, username) => {
  const  {data , error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username, // Xogta dheeriga ah ee user-ka
      },
    },
  });

  if (error) throw error;
  return data;
};

