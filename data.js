var Buala = {
  availableFilters: [
    { name: 'color', choices: ['blanco', 'gris', 'negro', 'amarillo', 'naranja', 'marrón', 'rojo', 'rosa', 'lila', 'azul', 'verde'], input: false},
    { name: 'temperatura', choices: ['ardiente', 'muy caliente', 'caliente', 'tibio', 'ambiente', 'fresco', 'frío', 'muy frío', 'helado'], input: false},
    { name: 'textura', choices: ['líquida', 'gel', 'fibrosa', 'aglomerada', 'untuosa', 'frágil', 'vítrea'], input: false},
    { name: 'gusto', choices: ['dulce', 'salado', 'ácido', 'amargo', 'unami', 'picante', 'acre', 'adiposo'], input: false},
    { name: 'olor', choices: ['fragancia floral', 'leñoso o resinoso', 'cítrico', 'frutal (no cítrico)', 'olor químico', 'mentolado refrescante', 'dulce', 'quemado o ahumado'], input: false},
    { name: 'sensación', choices: ['afrodisíaca', 'energética', 'relaxante', 'antidepresiva', 'recuperadora'], input: false},
    { name: 'ingrediente', choices: null, input: true}
  ],

  exampleReceipt: {
    file : {
      title: 'Callos marinos con jugo de liebre',
      photo: 'foto-1.png',
      description: 'Mi versión de la receta de los callos marinos con jugo de liebre.',
      ok: true,
      guests: 4,
      duration: 120,
      notes: true,
      ingredients: [
      { name: 'liebre pelada', qt: 1, units: 'ud' },
      { name: 'salsa de soja', qt: 50, units: 'g' },
      { name: 'vino manzanilla', qt: 50, units: 'g' },
      { name: 'vino de Oporto', qt: 50, units: 'g' },
      { name: 'vino tinto', qt: 300, units: 'g' },
      { name: 'apio', qt: 20, units: 'g' },
      { name: 'cebolla', qt: 40, units: 'g' },
      { name: 'zanahoria', qt: 30, units: 'g' },
      { name: 'tomillo seco', qt: 1, units: 'rama' },
      { name: 'romero seco', qt: 1, units: 'rama' },
      { name: 'laurel seco', qt: 3, units: 'hojas' },
      { name: 'pimienta negra', qt: 5, units: 'g' , notes: 'en grano' }
      ],
      utensils: ['cazuela', 'olla'],
      filters: ['temperatura', 'textura'],
      versions: [
      { name: 'Mi versión cambiando anguila', ok: true },
      { name: 'Reduciedo zanahoria', ok: false },
      { name: 'Versión original', ok: true }
      ]
    },
    parts: [
      // PART A
      {
        title: 'Marinada de Liebre',
        photo: 'elaboracio1.png',
        notes: true,
        ingredients: [
          { name: 'liebre pelada', qt: 1, units: 'ud' },
          { name: 'salsa de soja', qt: 50, units: 'g' },
          { name: 'vino manzanilla', qt: 50, units: 'g' },
          { name: 'vino de Oporto', qt: 50, units: 'g' },
          { name: 'vino tinto', qt: 300, units: 'g' },
          { name: 'apio', qt: 20, units: 'g' },
          { name: 'cebolla', qt: 40, units: 'g' },
          { name: 'zanahoria', qt: 30, units: 'g' },
          { name: 'tomillo seco', qt: 1, units: 'rama' },
          { name: 'romero seco', qt: 1, units: 'rama' },
          { name: 'laurel seco', qt: 3, units: 'hojas' },
          { name: 'pimienta negra', qt: 5, units: 'g' }
        ],
        utensils: ['nevera'],
        documentation: ['notes', 'photo'],
        duration: [24, 'h'],
        steps: [
          // step 1
          {
            before: {
              ingredients: [
                { name: 'liebre cortada',
                  documentation: {
                    notes: 'descabezada y eviscerada',
                  }
                }
              ]
            },
            action: {
              name: 'cortar',
              documentation: {
                notes: 'en trozos regulares de 2,5cm',
              }
            },
            after: [
              { name: 'liebre troceada' }
            ]
          },
          // step 2
          {
            before: {
              ingredients: [
                { name: 'zanahoria' },
                { name: 'cebolla' }
              ]
            },
            action: {
              name: 'cortar',
              documentation: {
                notes: 'en trozos regulares de 1,2cm',
              }
            },
            after: [
              { name: 'cebolla y zanahoria troceadas' }
            ]
          },
          // step 3
          {
            before: {
              ingredients: [
                { name: 'apio' }
              ]
            },
            action: {
              name: 'lavar y cortar',
              documentation: {
                notes: 'en trozos regulares de 1,2cm',
              }
            },
            after: [
              { name: 'apio lavado y cortado' }
            ]
          },
          // step 4
          {
            before: {
              ingredients: [
                { name: 'liebre troceada' },
                { name: 'cebolla y zanahora troceadas' },
                { name: 'apio lavado y cortado' },
                { name: 'salsa de soja' },
                { name: 'vino manzanilla' },
                { name: 'vino de Oporto' },
                { name: 'vino tinto' },
                { name: 'tomillo seco' },
                { name: 'romero seco' },
                { name: 'laurel seco' },
                { name: 'pimienta negra' }
              ]
            },
            action: {
              name: 'marinar',
              documentation: {
                notes: 'en la nevera',
                duration: '24 h.'
              }
            },
            after: [
              { name: 'marinada de liebre' }
            ]
          },
        ]
      },
      // PART B
      {
        title: 'Jugo de liebre',
        photo: 'elaboracio2.png',
        notes: true,
        ingredients: [
          { name: 'marinada de liebre'},
          { name: 'aceite', qt: 100, units: 'g' }
        ],
        utensils: ['colador', 'cazuela', 'estameña'],
        documentation: ['notes', 'photo'],
        duration: [45, 'min'],
        steps: [
          // step 1
          {
            before: {
              ingredients: [
                { name: 'marinada de liebre',
                  documentation: {
                    notes: 'elaboración anterior',
                  }
                }
              ]
            },
            action: {
              name: 'colar',
              documentation: {
                notes: 'guardando el líquido',
              }
            },
            after: [
              { name: 'marinada de liebre colada' }
            ]
          },
          // step 2
          {
            before: {
              ingredients: [
                { name: 'marinada de liebre colada' }
              ]
            },
            action: {
              name: 'separar',
            },
            after: [
              { name: 'trozos de liebre' },
              { name: 'trozos de verdura y hierbas aromáticas' }
            ]
          },
          // step 3
          {
            before: {
              ingredients: [
                { name: 'líquido de la marinada' }
              ]
            },
            action: {
              name: 'guardar',
            },
            after: {
              type: 'none'
            }
          },
          // step 4
          {
            before: {
              ingredients: [
                { name: 'trozos de liebre' }
              ]
            },
            action: {
              name: 'secar',
              documentation: {
                notes: 'sobre un paño'
              }
            },
            after: [
            { name: 'trozos de liebre secos' }
            ]
          },
          // step 5
          {
            before: {
              ingredients: [
                { name: 'trozos de liebre' },
                { name: 'aceite' }
              ]
            },
            action: {
              name: 'rustir',
              documentation: {
                notes: 'en una cazuela hasta que esté bien rustida uniformemente',
                flame: 'fuego medio',
              }
            },
            after: [
              { name: 'trozos de liebre rustidos' }
            ]
          },
          // step 6
          {
            before: {
              ingredients: [
                { name: 'trozos de verdura' }
              ]
            },
            action: {
              name: 'rehogar',
              documentation: {
                notes: 'en una cazuela a parte'
              }
            },
            after: [
              { name: 'trozos de verdura rehogados' }
            ]
          },
          // step 7
          {
            before: {
              ingredients: [
                { name: 'trozos de verdura rehogados' },
                { name: 'trozos de liebre rustidos' }
              ]
            },
            action: {
              name: 'juntar',
              documentation: {
                notes: 'en la cazuela en la que hemos rustido la liebre'
              }
            },
            after: {
              type: 'none',
            }
          },
          // step 8
          {
            before: {
              ingredients: [
                { name: 'trozos de verdura y liebre' }
              ]
            },
            action: {
              name: 'cocinar',
              documentation: {
                duration: '1 min.',
              }
            },
            after: [
              { name: 'trozos de verdura y liebre cocinados' }
            ]
          },
          // step 9
          {
            before: {
              ingredients: [
                { name: 'trozos de verdura y liebre cocinados' },
                { name: 'líquido de la marinada' }
              ]
            },
            action: {
              name: 'juntar',
              documentation: {
                notes: 'en la misma cazuela'
              }
            },
            after: {
              type: 'none',
            }
          },
          // step 10
          {
            before: {
              ingredients: [
                { name: 'trozos de verdura y liebre' }
              ]
            },
            action: {
              name: 'cocer',
              documentation: {
                notes: 'hasta obtener un jugo consistente y sabroso',
                duration: '30 min.',
              }
            },
            after: [
              { name: 'trozos de verdura y liebre cocinados' }
            ]
          },
          // step 11
          {
            before: {
              ingredients: [
                { name: 'trozos de verdura y liebre cocinados' }
              ]
            },
            action: {
              name: 'colar',
              documentation: {
                notes: 'utilizando un colador fino'
              }
            },
            after: [
              { name: 'trozos de verdura y liebre colados' },
              { name: 'jugo de liebre' }
            ]
          },
        ]
      },
      // PART C
      {
        title: 'Jugo de liebre ligado',
        photo: 'elaboracio3.png',
        notes: true,
        ingredients: [
          { name: 'jugo de liebre'},
          { name: 'xantana', qt: 0.1, units: 'g'},
          { name: 'sal' }
        ],
        utensils: ['colador', 'túrmix'],
        documentation: ['notes', 'photo'],
        duration: [12, 'min'],
        steps: [
          // step 1
          {
            before: {
              ingredients: [
                { name: 'jugo de liebre',
                  documentation: {
                    notes: 'elaboración anterior',
                  }
                }
              ]
            },
            action: {
              name: 'entibiar',
              documentation: {
                notes: 'y poner al punto de sal',
              }
            },
            after: [
              { name: 'jugo de liebre tibio' }
            ]
          },
          // step 2
          {
            before: {
              ingredients: [
                { name: 'jugo de liebre tibio' }
              ]
            },
            action: {
              name: 'añadir xantana',
            },
            after: [
              { name: 'jugo de liebre con xantana' }
            ]
          },
          // step 3
          {
            before: {
              ingredients: [
                { name: 'jugo de liebre con xantana' }
              ]
            },
            action: {
              name: 'triturar',
              documentation: {
                notes: 'con la ayuda de un túrmix. Hasta que no queden grumos',
              }
            },
            after: [
              { name: 'jugo de liebre triturado' }
            ]
          },
          // step 4
          {
            before: {
              ingredients: [
                { name: 'jugo de liebre triturado' }
              ]
            },
            action: {
              name: 'colar',
            },
            after: [
              { name: 'jugo de liebre colado' }
            ]
          },
          // step 5
          {
            before: {
              ingredients: [
                { name: 'jugo de liebre colado' }
              ]
            },
            action: {
              name: 'guardar',
            },
            after: {
              type: 'none'
            }
          },
        ]
      },
      // PART D
      {
        title: 'Tripa de bacalao guisada en jugo de liebre',
        photo: 'foto-1.png',
        notes: true,
        ingredients: [
          { name: 'jugo de liebre', qt: 200, units: 'g'},
          { name: 'tripas de bacalao desaladas', qt: 100, units: 'g'}
        ],
        utensils: ['colador', 'túrmix'],
        duration: [20, 'min'],
        steps: [
          // step 1
          {
            before: {
              ingredients: [
                { name: 'Tripas de bacalao' }
              ]
            },
            action: {
              name: 'limpiar',
              documentation: {
                notes: 'limpiarlas de piel y espinas',
              }
            },
            after: [
              { name: 'tripas de bacalao limpias' }
            ]
          },
          // step 2
          {
            before: {
              ingredients: [
                { name: 'tripas de bacalao limpias' }
              ]
            },
            action: {
              name: 'cocerlas',
              documentation: {
                notes: 'como si de un guiso se tratase',
                flame: 'a fuego medio',
                duration: '15 min.'
              }
            },
            after: [
              { name: 'tripas de bacalao cocidas' }
            ]
          },
          // step 3
          {
            before: {
              ingredients: [
                { name: 'tripas de bacalao cocidas' }
              ]
            },
            action: {
              name: 'sacar'
            },
            after: [
              { name: 'tripas de bacalao cocidas' }
            ]
          },
          // step 4
          {
            before: {
              ingredients: [
                { name: 'tripas de bacalao cocidas' }
              ]
            },
            action: {
              name: 'cortar',
              documentation: {
                notes: 'cortar en 8 rectángulos de 1x2 cm',
              }
            },
            after: [
              { name: 'tripas de bacalao cortadas' }
            ]
          },
          // step 5
          {
            before: {
              ingredients: [
                { name: 'tripas de bacalao cortadas' }
              ]
            },
            action: {
              name: 'guardar',
            },
            after: {
              type: 'none'
            }
          },
        ]
      },
      // PART E
      {
        title: 'Anguila ahumada en jugo de liebre',
        photo: 'foto-1.png',
        notes: true,
        ingredients: [
          { name: 'Lomo de anguila ahumado al azafrán', qt: 200, units: 'g'},
          { name: 'jugo de liebre', qt: 100, units: 'g'}
        ],
        utensils: ['olla'],
        documentation: ['notes', 'photo'],
        duration: [30, 'min'],
        steps: [
          // step 1
          {
            before: {
              ingredients: [
                { name: 'Lomo de anguila' }
              ]
            },
            action: {
              name: 'sacarle la carne',
              documentation: {
                notes: 'con cuidado de que quede la piel entera',
              }
            },
            after: [
              { name: 'piel de lomo de anguila' },
              { name: 'carne de anguila' }
            ]
          },
          // step 2
          {
            before: {
              ingredients: [
                { name: 'piel de lomo de anguila' }
              ]
            },
            action: {
              name: 'cortar',
              documentation: {
                notes: 'cortar en 8 rectángulos de piel de anguila de 2x3cm',
              }
            },
            after: [
              { name: 'piel de anguila cortada' }
            ]
          },
          // step 3
          {
            before: {
              ingredients: [
                { name: 'tripas de bacalao cocidas' }
              ]
            },
            action: {
              name: 'sacar'
            },
            after: [
              { name: 'tripas de bacalao cocidas' }
            ]
          },
          // step 4
          {
            before: {
              ingredients: [
                { name: 'tripas de bacalao cocidas' }
              ]
            },
            action: {
              name: 'cortar',
              documentation: {
                notes: 'cortar en 8 rectángulos de 1x2 cm',
              }
            },
            after: [
              { name: 'tripas de bacalao cortadas' }
            ]
          },
          // step 5
          {
            before: {
              ingredients: [
                { name: 'tripas de bacalao cortadas' }
              ]
            },
            action: {
              name: 'guardar',
            },
            after: {
              type: 'none'
            }
          },
        ]
      },
      // PRESENTATION
      {
        title: 'Presentación',
        presentation: true,
        photo: 'foto-1.png',
        notes: true,
        ingredients: [
          { name: 'Lomo de anguila ahumado al azafrán', qt: 200, units: 'g'},
          { name: 'jugo de liebre', qt: 100, units: 'g'}
        ],
        utensils: ['olla'],
        documentation: ['notes', 'photo'],
        duration: [30, 'min'],
        steps: [
          // step 1
          {
            before: {
              ingredients: [
                { name: 'tripa de bacalao guisada' },
                { name: 'Piel de anguila guisada' }
              ]
            },
            action: {
              name: 'calentar'
            },
            after: [
              { name: 'tripa de bacalao guisada caliente' },
              { name: 'Piel de anguila guisada caliente' }
            ]
          },
          // step 2
          {
            before: {
              ingredients: [
                { name: 'panceta confitada' }
              ]
            },
            action: {
              name: 'calentar'
            },
            after: {
              type: 'none'
            }

          },
          // step 2
          {
            before: {
              ingredients: [
                { name: 'rectángulos de pitahaya' }
              ]
            },
            action: {
              name: 'cocer',
              documentation: {
                notes: 'en la vaporera',
                duraton: '2 min.',
              }
            },
            after: [
              { name: 'rectángulos de pitahaya cocidos' }
            ]
          },
          // step 3
          {
            before: {
              ingredients: [
                { name: 'rectángulos de pitahaya cocidos' }
              ]
            },
            action: {
              name: 'cortar',
              documentation: {
                notes: 'cada rectángulo en dos mitadoes practicando un corte ligeramente transversal en la parte central de cada rectángulo'
              }
            },
            after: [
              { name: 'rectángulos de pitahaya cortados' }
            ]
          },
          // step 4
          {
            before: {
              ingredients: [
                { name: 'rectángulo de panceta' },
                { name: 'rectángulo de tripa de bacalao' },
                { name: 'rectángulo de piel de anguila' }
              ]
            },
            action: {
              name: 'disponer en plato',
              documentation: {
                notes: 'disponer un rectángulo de panceta confitada en el lado derecho e izquierdo del plato, y encima de éstos disponer un rectángulo de tripa de bacalao y terminar con un rectángulo de piel de anguila guisada en la parte superior, con la parte de piel exterior hacia arriba',
              }
            },
            after: { type: 'none' }
          },
          // step 5
          {
            before: {
              ingredients: [
                { name: 'rectángulo de pitahaya caliente' }
              ]
            },
            action: {
              name: 'disponer en plato',
              documentation: {
                notes: 'entre las dos torres formadas por la panceta, tripa y anguila disponer el rectángulo de pitahaya caliente',
              }
            },
            after: {
              type: 'none'
            }
          },
          // step 5
          {
            before: {
              ingredients: [
                { name: 'aceite de guindilla' }
              ]
            },
            action: {
              name: 'aliñar',
              documentation: {
                notes: 'aliñar la pitahaya con dos gotas de aceite de guindilla',
              }
            },
            after: {
              type: 'none'
            }
          },
          // step 6
          {
            before: {
              ingredients: [
                { name: 'brotes germinados de borraja' }
              ]
            },
            action: {
              name: 'disponer en plato',
              documentation: {
                notes: 'apoyar en cada lado de la pitahaya dos brotes de germinado de borraja',
              }
            },
            after: {
              type: 'none'
            }
          },
          // step 7
          {
            before: {
              ingredients: [
                { name: 'jugo de liebre caliente ligado' },
                { name: 'aceite de tierra' }
              ]
            },
            action: {
              name: 'salsear',
              documentation: {
                notes: 'salsear los montoncitos de tripa y anguila con una cucharada de jugo de liebre caliente ligado y terminar  cortando el jugo con unas gotas de aceite de tierra',
              }
            },
            after: {
              type: 'none'
            }
          },
        ]
      }
    ],
  },

  fakeResults: [
    {
      id: 1,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 2,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 3,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 4,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 5,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 6,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 7,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 8,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 9,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    },
    {
      id: 10,
      title: 'Callos marinos con jugo de liebre',
      author: 'Ferràn Adrià',
      ingredients: 28,
      utensils: 8,
      duration: 120,
    }
  ]
}
