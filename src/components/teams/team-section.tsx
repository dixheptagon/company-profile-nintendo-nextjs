"use client";

import { useEffect, useState } from "react";
import TeamCard from "@/components/teams/team-card";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
}

export default function TeamsSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <section className="my-5 min-h-screen bg-red-700 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Meet Our Team
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-white">
          At the heart of Nintendo is a passionate team of creators, innovators,
          and leaders who bring fun to life. Together, they turn bold ideas into
          unforgettable gaming experiences for players around the world.
        </p>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {users.map((user) => (
              <TeamCard
                key={user.login.uuid}
                name={`${user.name.first} ${user.name.last}`}
                position="Team Member"
                image={user.picture.large}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
