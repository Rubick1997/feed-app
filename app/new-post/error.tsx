"use client";

export default function NewPostError({ error }: Props) {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
    </>
  );
}

type Props = { error: { message: string } };
