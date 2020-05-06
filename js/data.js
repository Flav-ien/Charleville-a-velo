const data = {
  defaultPointsDisplayed: [
    "Place de l’Étoile",
    "Montmartre",
    "Place de la République",
    "Place d’Italie",
    "Notre Dame",
    "Gare Montparnasse",
    "Maison de la Radio",
    "Nation",
  ],
  lines: [
    {
      start: "Convention",
      end: "Invalides",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "top",
    },
    {
      start: "Convention",
      end: "Gare Montparnasse",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Convention",
      end: "Porte d’Orléans",
      difficulty: 0,
      displayMin: true,
      time: 17,
      align: "top",
    },
    {
      start: "Convention",
      end: "Porte de Saint-Cloud",
      difficulty: 0,
      displayMin: true,
      time: 15,
      align: "top",
    },
    {
      start: "Porte de Saint-Cloud",
      end: "Marcel Sembat",
      difficulty: 0,
      displayMin: true,
      time: 6,
      align: "top",
    },
    {
      start: "Mairie d’Issy",
      end: "Marcel Sembat",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Mairie d’Issy",
      end: "Porte de Versailles",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: "top",
    },
    {
      start: "Mairie d’Issy",
      end: "Mairie de Vanves",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Mairie de Vanves",
      end: "Porte de Versailles",
      difficulty: 0,
      displayMin: true,
      time: 6,
      align: "top",
    },
    {
      start: "Convention",
      end: "Maison de la Radio",
      difficulty: 0,
      displayMin: true,
      time: 11,
      align: "top",
    },
    {
      start: "Convention",
      end: "Tour Eiffel",
      difficulty: 0,
      displayMin: true,
      time: 13,
      align: "top",
    },
    {
      start: "Gare Montparnasse",
      end: "Invalides",
      difficulty: 0,
      displayMin: true,
      time: 11,
      align: "top",
    },
    {
      start: "Gare Montparnasse",
      end: "Jardin du Luxembourg",
      difficulty: 0,
      displayMin: true,
      time: 9,
      align: "top",
    },
    {
      start: "Gare Montparnasse",
      end: "Place Denfert-Rochereau",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Gare Montparnasse",
      end: "Porte d’Orléans",
      difficulty: 0,
      displayMin: true,
      time: 16,
      align: "top",
    },
    {
      start: "Gare Saint-Lazare",
      end: "Porte de Clichy",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "bottom",
    },
    {
      start: "Gare Saint-Lazare",
      end: "Montmartre",
      difficulty: -1,
      displayMin: false,
      time: 11,
      times: { easy: 10, hard: 12 },
      align: null,
    },
    {
      start: "Gare Saint-Lazare",
      end: "Gare du Nord",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Gare Saint-Lazare",
      end: "Place de la République",
      difficulty: 0,
      displayMin: true,
      time: 13,
      align: "top",
    },
    {
      start: "Gare Saint-Lazare",
      end: "Place de la Concorde",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Gare Saint-Lazare",
      end: "Place de l’Étoile",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Gare de Lyon",
      end: "Nation",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Gare de Lyon",
      end: "Porte de Bercy",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "bottom",
    },
    {
      start: "Gare de Lyon",
      end: "Place d’Italie",
      difficulty: 1,
      displayMin: true,
      time: 9,
      times: { hard: 10, easy: 8 },
      align: null,
    },
    {
      start: "Gare de Lyon",
      end: "Notre Dame",
      difficulty: 0,
      displayMin: true,
      time: 9,
      align: "bottom",
    },
    {
      start: "Gare du Nord",
      end: "Porte de la Chapelle",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "top",
    },
    {
      start: "Gare du Nord",
      end: "La Villette",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "top",
    },
    {
      start: "Gare du Nord",
      end: "Belleville–Pyrénées",
      difficulty: 1,
      displayMin: true,
      time: 13,
      times: { hard: 14, easy: 12 },
      align: null,
    },
    {
      start: "Gare du Nord",
      end: "Place de la République",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Gare du Nord",
      end: "Notre Dame",
      difficulty: 0,
      displayMin: true,
      time: 15,
      align: "top",
    },
    {
      start: "Gare du Nord",
      end: "Montmartre",
      difficulty: -1,
      displayMin: true,
      time: 10,
      times: { easy: 9, hard: 12 },
      align: null,
    },
    {
      start: "Invalides",
      end: "Place de la Concorde",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: "top",
    },
    {
      start: "Invalides",
      end: "Notre Dame",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "bottom",
    },
    {
      start: "Invalides",
      end: "Tour Eiffel",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "bottom",
    },
    {
      start: "Jardin du Luxembourg",
      end: "Notre Dame",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: "top",
    },
    {
      start: "Jardin du Luxembourg",
      end: "Place d’Italie",
      difficulty: 1,
      displayMin: false,
      time: 10,
      times: { hard: 11, easy: 9 },
      align: null,
    },
    {
      start: "Jardin du Luxembourg",
      end: "Place de la Concorde",
      difficulty: 0,
      displayMin: true,
      time: 13,
      align: "top",
    },
    {
      start: "La Villette",
      end: "Porte des Lilas",
      difficulty: 1,
      displayMin: true,
      time: 10,
      times: { hard: 11, easy: 9 },
      align: null,
    },
    {
      start: "Porte de Bagnolet",
      end: "Porte des Lilas",
      difficulty: -1,
      displayMin: true,
      time: 10,
      times: { hard: 11, easy: 9 },
      align: null,
    },
    {
      start: "Belleville–Pyrénées",
      end: "Porte des Lilas",
      difficulty: -1,
      displayMin: false,
      time: 6,
      times: { hard: 8, easy: 5 },
      align: null,
    },
    {
      start: "Croix de Chavaux",
      end: "Mairie des Lilas",
      difficulty: -1,
      displayMin: true,
      time: 12,
      times: { hard: 14, easy: 10 },
      align: null,
    },
    {
      start: "Croix de Chavaux",
      end: "Mairie de Romainville",
      difficulty: -1,
      displayMin: true,
      time: 13,
      times: { hard: 15, easy: 12 },
      align: null,
    },
    {
      start: "Hôpital André Grégoire—Montreuil",
      end: "Mairie de Romainville",
      difficulty: 0,
      displayMin: true,
      time: 9,
      align: null,
    },
    {
      start: "Croix de Chavaux",
      end: "Hôpital André Grégoire—Montreuil",
      difficulty: -1,
      displayMin: true,
      time: 15,
      times: { hard: 17, easy: 14 },
      align: null,
    },
    {
      start: "Mairie de Rosny",
      end: "Hôpital André Grégoire—Montreuil",
      difficulty: -1,
      displayMin: true,
      time: 16,
      times: { hard: 18, easy: 15 },
      align: null,
    },
    {
      start: "Mairie de Rosny",
      end: "Murs à Pêches–Les Ruffins",
      difficulty: -1,
      displayMin: true,
      time: 10,
      times: { hard: 12, easy: 10 },
      align: null,
    },
    {
      start: "Mairie de Rosny",
      end: "Val de Fontenay",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "top",
    },
    {
      start: "Mairie de Fontenay-sous-Bois",
      end: "Val de Fontenay",
      difficulty: 0,
      displayMin: true,
      time: 9,
      align: "top",
    },
    {
      start: "Mairie de Nogent-sur-Marne",
      end: "Val de Fontenay",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Croix de Chavaux",
      end: "Murs à Pêches–Les Ruffins",
      difficulty: -1,
      displayMin: true,
      time: 12,
      times: { hard: 14, easy: 10 },
      align: null,
    },
    {
      start: "Mairie de Fontenay-sous-Bois",
      end: "Murs à Pêches–Les Ruffins",
      difficulty: -1,
      displayMin: true,
      time: 13,
      times: { hard: 16, easy: 10 },
      align: null,
    },
    {
      start: "Mairie des Lilas",
      end: "Porte des Lilas",
      difficulty: 0,
      displayMin: true,
      time: 4,
      align: null,
    },
    {
      start: "Mairie de Romainville",
      end: "Mairie des Lilas",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: null,
    },
    {
      start: "La Villette",
      end: "Belleville–Pyrénées",
      difficulty: 1,
      displayMin: true,
      time: 12,
      times: { hard: 14, easy: 10 },
      align: null,
    },
    {
      start: "La Villette",
      end: "Porte de la Chapelle",
      difficulty: 0,
      displayMin: true,
      time: 13,
      align: "top",
    },
    {
      start: "Maison de la Radio",
      end: "Porte Maillot",
      difficulty: 0,
      displayMin: true,
      time: 15,
      align: "top",
    },
    {
      start: "La Défense",
      end: "Porte Maillot",
      difficulty: 0,
      displayMin: true,
      time: 20,
      align: "top",
    },
    {
      start: "Maison de la Radio",
      end: "Place de l’Alma",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Maison de la Radio",
      end: "Tour Eiffel",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "bottom",
    },
    {
      start: "Maison de la Radio",
      end: "Porte de Saint-Cloud",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "top",
    },
    {
      start: "Montmartre",
      end: "Porte de Clichy",
      difficulty: 1,
      displayMin: true,
      time: 14,
      times: { easy: 13, hard: 16 },
      align: null,
    },
    {
      start: "Montmartre",
      end: "Porte de la Chapelle",
      difficulty: 1,
      displayMin: true,
      time: 15,
      times: { easy: 14, hard: 16 },
      align: null,
    },
    {
      start: "Nation",
      end: "Porte de Bercy",
      difficulty: 0,
      displayMin: true,
      time: 15,
      align: "top",
    },
    {
      start: "Nation",
      end: "Place de la Bastille",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Nation",
      end: "Père Lachaise",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Nation",
      end: "Porte de Bagnolet",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "top",
    },
    {
      start: "Notre Dame",
      end: "Place de la République",
      difficulty: 0,
      displayMin: true,
      time: 9,
      align: "bottom",
    },
    {
      start: "Notre Dame",
      end: "Place de la Bastille",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Notre Dame",
      end: "Place d’Italie",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "top",
    },
    {
      start: "Notre Dame",
      end: "Place Denfert-Rochereau",
      difficulty: 0,
      displayMin: true,
      time: 15,
      align: "top",
    },
    {
      start: "Notre Dame",
      end: "Place de la Concorde",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "top",
    },
    {
      start: "Belleville–Pyrénées",
      end: "Porte de Bagnolet",
      difficulty: -1,
      displayMin: true,
      time: 12,
      times: { easy: 10, hard: 14 },
      align: null,
    },
    {
      start: "Belleville–Pyrénées",
      end: "Père Lachaise",
      difficulty: -1,
      displayMin: false,
      time: 6,
      times: { easy: 5, hard: 8 },
      align: null,
    },
    {
      start: "Belleville–Pyrénées",
      end: "Place de la Bastille",
      difficulty: -1,
      displayMin: false,
      time: 13,
      times: { easy: 11, hard: 15 },
      align: null,
    },
    {
      start: "Belleville–Pyrénées",
      end: "Place de la République",
      difficulty: -1,
      displayMin: true,
      time: 9,
      times: { easy: 8, hard: 10 },
      align: null,
    },
    {
      start: "Place Denfert-Rochereau",
      end: "Porte d’Orléans",
      difficulty: 0,
      displayMin: true,
      time: 9,
      align: "top",
    },
    {
      start: "Place d’Italie",
      end: "Porte de Bercy",
      difficulty: -1,
      displayMin: true,
      time: 14,
      times: { hard: 16, easy: 12 },
      align: null,
    },
    {
      start: "Place d’Italie",
      end: "Porte d’Orléans",
      difficulty: 0,
      displayMin: true,
      time: 11,
      align: "top",
    },
    {
      start: "Place de l’Étoile",
      end: "Porte de Clichy",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "top",
    },
    {
      start: "Place de l’Étoile",
      end: "Place de la Concorde",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Place de l’Alma",
      end: "Tour Eiffel",
      difficulty: 0,
      displayMin: true,
      time: 6,
      align: "bottom",
    },
    {
      start: "Place de l’Alma",
      end: "Place de l’Étoile",
      difficulty: 0,
      displayMin: true,
      time: 6,
      align: "bottom",
    },
    {
      start: "Place de l’Alma",
      end: "Place de la Concorde",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: "top",
    },
    {
      start: "Place de l’Étoile",
      end: "Porte Maillot",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Place de la Bastille",
      end: "Place de la République",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Place de la Bastille",
      end: "Père Lachaise",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "bottom",
    },
    {
      start: "Place de la Bastille",
      end: "Gare de Lyon",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: "bottom",
    },
    {
      start: "Place de la Concorde",
      end: "Place de la République",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "top",
    },
    {
      start: "Porte Maillot",
      end: "Porte de Clichy",
      difficulty: 0,
      displayMin: true,
      time: 14,
      align: "top",
    },
    {
      start: "Porte Maillot",
      end: "Porte de Saint-Cloud",
      difficulty: 0,
      displayMin: true,
      time: 22,
      align: "top",
    },
    {
      start: "Porte de Versailles",
      end: "Porte de Saint-Cloud",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Porte d’Orléans",
      end: "Porte de Versailles",
      difficulty: 1,
      displayMin: true,
      time: 10,
      times: { hard: 11, easy: 8},
      align: "top",
    },
    {
      start: "Porte d’Orléans",
      end: "Porte d’Italie",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Place d’Italie",
      end: "Porte d’Italie",
      difficulty: 0,
      displayMin: true,
      time: 4,
      align: "top",
    },
    {
      start: "Porte d’Italie",
      end: "Porte de Bercy",
      difficulty: 1,
      displayMin: true,
      time: 13,
      times: { hard: 15, easy: 11 },
      align: null,
    },
    {
      start: "Porte d’Italie",
      end: "Villejuif",
      difficulty: -1,
      displayMin: true,
      time: 13,
      times: { hard: 15, easy: 11 },
      align: null,
    },
    {
      start: "Porte de Bagnolet",
      end: "Père Lachaise",
      difficulty: -1,
      displayMin: false,
      time: 9,
      times: { hard: 10, easy: 8 },
      align: null,
    },
    {
      start: "Porte de Clichy",
      end: "Porte de Saint-Ouen",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: "top",
    },
    {
      start: "Porte de Saint-Ouen",
      end: "Porte de la Chapelle",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Croix de Chavaux",
      end: "Nation",
      difficulty: 0,
      displayMin: true,
      time: 17,
      align: "top",
    },
    {
      start: "Croix de Chavaux",
      end: "Porte de Bagnolet",
      difficulty: 0,
      displayMin: true,
      time: 11,
      align: "top",
    },
    {
      start: "Croix de Chavaux",
      end: "Château de Vincennes",
      difficulty: 0,
      displayMin: true,
      time: 9,
      align: "top",
    },
    {
      start: "Château de Vincennes",
      end: "Nation",
      difficulty: 0,
      displayMin: true,
      time: 15,
      align: "top",
    },
    {
      start: "Croix de Chavaux",
      end: "Mairie de Fontenay-sous-Bois",
      difficulty: 0,
      displayMin: true,
      time: 15,
      align: "top",
    },
    {
      start: "Mairie de Nogent-sur-Marne",
      end: "Mairie de Fontenay-sous-Bois",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Château de Vincennes",
      end: "Mairie de Fontenay-sous-Bois",
      difficulty: 0,
      displayMin: true,
      time: 17,
      align: "top",
    },
    {
      start: "Porte Dorée",
      end: "Château de Vincennes",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Porte Dorée",
      end: "Nation",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Porte Dorée",
      end: "Porte de Bercy",
      difficulty: 0,
      displayMin: true,
      time: 6,
      align: "top",
    },
    {
      start: "La Villette",
      end: "Saint-Denis",
      difficulty: 0,
      displayMin: true,
      time: 20,
      align: "top",
    },
    {
      start: "L’Île Saint-Denis",
      end: "Saint-Denis",
      difficulty: 0,
      displayMin: true,
      time: 5,
      align: "top",
    },
    {
      start: "La Plaine Saint-Denis",
      end: "Saint-Denis",
      difficulty: 0,
      displayMin: true,
      time: 8,
      align: "top",
    },
    {
      start: "Porte de la Chapelle",
      end: "La Plaine Saint-Denis",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Porte de Clichy",
      end: "Mairie de Clichy",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "bottom",
    },
    {
      start: "Asnières (Gabriel Péri)",
      end: "Mairie de Clichy",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Mairie de Clichy",
      end: "Saint-Ouen RER",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Porte de Clichy",
      end: "Saint-Ouen RER",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Saint-Ouen",
      end: "Saint-Ouen RER",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Saint-Ouen",
      end: "Saint-Denis",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "top",
    },
    {
      start: "Saint-Ouen",
      end: "Porte de Saint-Ouen",
      difficulty: 0,
      displayMin: true,
      time: 10,
      align: "top",
    },
    {
      start: "Porte de Bercy",
      end: "Pont de Charenton",
      difficulty: 0,
      displayMin: true,
      time: 12,
      align: "top",
    },
    {
      start: "Porte Dorée",
      end: "Pont de Charenton",
      difficulty: 0,
      displayMin: true,
      time: 7,
      align: "top",
    },
    {
      start: "Pont de Joinville",
      end: "Pont de Charenton",
      difficulty: 0,
      displayMin: true,
      time: 16,
      align: "top",
    },
    {
      start: "Pont de Joinville",
      end: "Château de Vincennes",
      difficulty: 0,
      displayMin: true,
      time: 18,
      align: "top",
    },
    {
      start: "Pont de Joinville",
      end: "Mairie de Nogent-sur-Marne",
      difficulty: 0,
      displayMin: true,
      time: 17,
      align: "top",
    },
    {
      start: "Château de Vincennes",
      end: "Mairie de Nogent-sur-Marne",
      difficulty: 0,
      displayMin: true,
      time: 20,
      align: "top",
    },
    {
      start: "Château de Vincennes",
      end: "Pont de Charenton",
      difficulty: -1,
      displayMin: true,
      time: 18,
      times: {hard: 19, easy: 17},
      align: "top",
    },
  ],
  points: {
    "Château de Vincennes": {
      x: 990,
      y: 579,
    },
    Convention: {
      x: 475,
      y: 624,
    },
    "Croix de Chavaux": {
      x: 993,
      y: 507,
    },
    "Gare Montparnasse": {
      x: 562,
      y: 579,
    },
    "Gare Saint-Lazare": {
      x: 580,
      y: 392,
    },
    "Gare de Lyon": {
      x: 775,
      y: 571,
    },
    "Gare du Nord": {
      x: 693,
      y: 396,
    },
    Invalides: {
      x: 534,
      y: 508,
    },
    "Jardin du Luxembourg": {
      x: 627,
      y: 550,
    },
    "La Villette": {
      x: 813,
      y: 297,
    },
    "Maison de la Radio": {
      x: 405,
      y: 537,
    },
    Montmartre: {
      x: 634,
      y: 349,
    },
    Nation: {
      x: 841,
      y: 559,
    },
    "Notre Dame": {
      x: 674,
      y: 530,
    },
    "Belleville–Pyrénées": {
      x: 809,
      y: 406,
    },
    "Place Denfert-Rochereau": {
      x: 607,
      y: 639,
    },
    "Place de la Bastille": {
      x: 742,
      y: 531,
    },
    "Place de la Concorde": {
      x: 567,
      y: 460,
    },
    "Place de la République": {
      x: 724,
      y: 449,
    },
    "Place de l’Étoile": {
      x: 471,
      y: 418,
    },
    "Place d’Italie": {
      x: 695,
      y: 657,
    },
    "Porte Dorée": {
      x: 885,
      y: 631,
    },
    "Porte Maillot": {
      x: 417,
      y: 390,
    },
    "Porte de Bagnolet": {
      x: 891,
      y: 469,
    },
    "Porte de Bercy": {
      x: 826,
      y: 668,
    },
    "Porte de Clichy": {
      x: 540,
      y: 301,
    },
    "Porte de Saint-Cloud": {x: 360, y: 601},
    "Porte de la Chapelle": {
      x: 708,
      y: 276,
    },
    "Porte des Lilas": {
      x: 887,
      y: 393,
    },
    "Porte d’Orléans": {
      x: 580,
      y: 700,
    },
    "Père Lachaise": {
      x: 810,
      y: 476,
    },
    "Tour Eiffel": {
      x: 471,
      y: 507,
    },
    "Saint-Denis": {
      x: 699,
      y: 89,
    },
    "L’Île Saint-Denis": {
      x: 637,
      y: 66,
    },
    "Saint-Ouen": {
      x: 617,
      y: 193,
    },
    "Porte de Saint-Ouen": {
      x: 597,
      y: 281,
    },
    "Pont de Charenton": {x: 934, y: 738},
    "Porte d’Italie": {
      x: 710,
      y: 721,
    },
    Villejuif: {
      x: 721,
      y: 872,
    },
    "La Défense": {
      x: 278,
      y: 323,
    },
    "Mairie de Clichy": {
      x: 512,
      y: 258,
    },
    "Saint-Ouen RER": {
      x: 568,
      y: 240,
    },
    "Asnières (Gabriel Péri)": {
      x: 470,
      y: 178,
    },
    "La Plaine Saint-Denis": {
      x: 703,
      y: 180,
    },
    "Place de l’Alma": {
      x: 491, y: 461
    },
    "Marcel Sembat": {x: 325, y: 618},
    "Mairie d’Issy": {x: 384, y: 653},
    "Porte de Versailles": {x: 447, y: 647},
    "Mairie de Vanves": {x: 452, y: 720},
    "Mairie des Lilas": {x: 926, y: 378},
    "Mairie de Romainville": {x: 997, y: 345},
    "Mairie de Fontenay-sous-Bois": {x: 1123, y: 563},
    "Hôpital André Grégoire—Montreuil": {x: 1057, y: 397},
    "Mairie de Rosny": {x: 1172, y: 416},
    "Murs à Pêches–Les Ruffins": {x: 1105, y: 477},
    "Mairie de Nogent-sur-Marne": {x: 1196, y: 611},
    "Pont de Joinville": {x: 1116, y: 716},
    "Val de Fontenay": {x: 1205, y: 538}
  },
};