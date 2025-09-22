// This file acts as a placeholder for a real data model or API client.
// It will return sample data to simulate fetching from a backend.

const sampleLeagues = [
    {
        id: 1,
        name: "Monday Men's 7 A-Side",
        season: "January 2025",
        teams: [
            { name: "Team A", played: 5, won: 4, lost: 0, drawn: 1, goals_for: 20, goals_against: 5, points: 13 },
            { name: "Team B", played: 5, won: 3, lost: 1, drawn: 1, goals_for: 15, goals_against: 8, points: 10 },
            { name: "Team C", played: 5, won: 2, lost: 2, drawn: 1, goals_for: 12, goals_against: 12, points: 7 },
        ],
        fixtures: [
            { home_team: "Team A", away_team: "Team B", date: "2025-01-20", time: "19:00", status: "scheduled" },
            { home_team: "Team C", away_team: "Team D", date: "2025-01-20", time: "20:00", status: "scheduled" },
            { home_team: "Team A", away_team: "Team C", home_score: 3, away_score: 1, date: "2025-01-13", status: "completed" },
        ]
    },
    {
        id: 2,
        name: "Monday May Men's 5 A-Side",
        season: "May 2025",
        teams: [
            { name: "Red Devils", played: 4, won: 4, lost: 0, drawn: 0, goals_for: 25, goals_against: 4, points: 12 },
            { name: "Blue Lions", played: 4, won: 3, lost: 1, drawn: 0, goals_for: 18, goals_against: 10, points: 9 },
        ],
        fixtures: [
            { home_team: "Red Devils", away_team: "Blue Lions", date: "2025-05-19", time: "19:00", status: "scheduled" },
        ]
    },
    {
        id: 3,
        name: "Tuesday Mixed 5 A-Side",
        season: "January 2025",
        teams: [
             { name: "Yellow Jackets", played: 5, won: 5, lost: 0, drawn: 0, goals_for: 30, goals_against: 10, points: 15 },
        ],
        fixtures: [
             { home_team: "Yellow Jackets", away_team: "Green Hornets", date: "2025-01-21", time: "19:00", status: "scheduled" },
        ]
    }
];

export class League {
  static async list() {
    console.log("Fetching list of leagues...");

    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real application, you would fetch from your API:
    // const response = await fetch('/api/leagues');
    // if (!response.ok) {
    //   throw new Error('Failed to fetch leagues');
    // }
    // return await response.json();

    return sampleLeagues;
  }
}