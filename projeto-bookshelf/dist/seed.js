"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // Gêneros
    await prisma.genre.createMany({
        data: [
            { id: 1, genero: 'Clássico' },
            { id: 2, genero: 'Ficção Científica' },
            { id: 3, genero: 'Realismo Mágico' },
            { id: 4, genero: 'Ficção' },
            { id: 5, genero: 'Fantasia' },
            { id: 6, genero: 'Romance' },
            { id: 7, genero: 'Biografia' },
            { id: 8, genero: 'História' },
            { id: 9, genero: 'Autoajuda' },
            { id: 10, genero: 'Tecnologia' },
            { id: 11, genero: 'Programação' },
            { id: 12, genero: 'Negócios' },
            { id: 13, genero: 'Psicologia' },
            { id: 14, genero: 'Filosofia' },
            { id: 15, genero: 'Poesia' },
            { id: 16, genero: 'Literatura Brasileira' },
        ],
        skipDuplicates: true,
    });
    // Livros
    await prisma.book.createMany({
        data: [
            {
                id: 16,
                title: 'Grande sertão: veredas',
                author: 'Guimarães Rosa',
                pages: 240,
                isbn: null,
                status: 'QUERO LER',
                rating: 3,
                synopsis: '"Grande Sertão: Veredas" narra a vida do jagunço Riobaldo, que conta sua história de infância até a velhice para um interlocutor em sua fazenda, relatando a vida no sertão, os conflitos entre bandos de jagunços, as reflexões sobre o bem e o mal, a possível pacto com o demônio e seu amor por Diadorim, um companheiro que se revela uma mulher após sua morte, o que o leva a abandonar a vida de jagunço.',
                cover: 'https://i.pinimg.com/736x/a9/49/43/a94943d6e0b626ce250d43afe02696cd.jpg',
                year: 1956,
                totalPaginasLidas: '0',
                genreId: 6,
                createdAt: new Date('2025-10-04T21:46:40'),
                updatedAt: new Date(1759660410606),
            },
            {
                id: 2,
                title: '1984',
                author: 'George Orwell',
                pages: 328,
                isbn: null,
                status: 'LIDO',
                rating: 4,
                synopsis: '"1984" de George Orwell mostra uma sociedade totalitária onde o Partido e o Grande Irmão controlam toda a informação, pensamentos e ações das pessoas. Winston Smith, funcionário que reescreve a história, começa a questionar o regime e busca liberdade e amor, mas enfrenta vigilância constante e repressão brutal. O livro é uma crítica à opressão, manipulação da verdade e perda da individualidade.',
                cover: 'https://i.pinimg.com/736x/b8/1e/cd/b81ecde4aeda4e64f2b96e5351bf32d0.jpg',
                year: 1949,
                totalPaginasLidas: '328',
                genreId: 2,
                createdAt: new Date('2025-10-04T21:56:10'),
                updatedAt: new Date(1759660702197),
            },
            {
                id: 3,
                title: 'Cem Anos de Solidão',
                author: 'Gabriel García Márquez',
                pages: 448,
                isbn: null,
                status: 'LENDO',
                rating: 5,
                synopsis: '"Cem Anos de Solidão" acompanha a saga da família Buendía na cidade fictícia de Macondo, mostrando amores, tragédias e acontecimentos mágicos que se repetem por gerações. A obra explora solidão, destino e memória, mesclando realidade e fantasia para refletir sobre a vida e a história da América Latina.',
                cover: 'https://i.pinimg.com/736x/47/bf/02/47bf021151c08c65fb0b7f1785e18340.jpg',
                year: 1967,
                totalPaginasLidas: '100',
                genreId: 3,
                createdAt: new Date('2025-10-04T22:08:41'),
                updatedAt: new Date(1759616859403),
            },
            {
                id: 4,
                title: 'O Pequeno Príncipe',
                author: 'Antoine de Saint-Exupéry',
                pages: 96,
                isbn: null,
                status: 'LIDO',
                rating: 5,
                synopsis: '"O Pequeno Príncipe", de Antoine de Saint-Exupéry, conta a jornada de um menino vindo de outro planeta que viaja por diferentes mundos até chegar à Terra. Em encontros com adultos e suas manias, ele revela lições sobre amizade, amor, simplicidade e o essencial que "é invisível aos olhos".',
                cover: 'https://i.pinimg.com/1200x/98/6b/e0/986be08cc108e292be3ff9bb463f4e2b.jpg',
                year: 1943,
                totalPaginasLidas: '96',
                genreId: 4,
                createdAt: new Date('2025-10-04T22:14:05'),
                updatedAt: new Date('2025-10-04T22:14:05'),
            },
            {
                id: 5,
                title: 'Orgulho e Preconceito',
                author: 'Jane Austen',
                pages: 400,
                isbn: null,
                status: 'LIDO',
                rating: 3,
                synopsis: '"Orgulho e Preconceito", de Jane Austen, narra a história de Elizabeth Bennet e sua família na Inglaterra do século XIX. O livro acompanha seus conflitos amorosos, sociais e familiares, destacando o relacionamento entre Elizabeth e o reservado Sr. Darcy, marcado por mal-entendidos, orgulho e preconceito, até evoluírem para o reconhecimento mútuo e o amor verdadeiro.',
                cover: 'https://i.pinimg.com/736x/a1/b6/d3/a1b6d3d697cb8607db1bd0537aee6d2a.jpg',
                year: 1843,
                totalPaginasLidas: '400',
                genreId: 1,
                createdAt: new Date('2025-10-04T22:19:38'),
                updatedAt: new Date('2025-10-04T22:19:38'),
            },
            {
                id: 6,
                title: 'Sapiens',
                author: 'Yuval Noah Harari',
                pages: 512,
                isbn: null,
                status: 'PAUSADO',
                rating: 4,
                synopsis: '"Sapiens", de Yuval Noah Harari, apresenta a história da humanidade desde o surgimento do Homo sapiens até o mundo contemporâneo. O autor analisa como a espécie evoluiu através de três grandes revoluções: cognitiva, agrícola e científica, mostrando como crenças, sociedades e tecnologias moldaram a vida humana e o planeta.',
                cover: 'https://m.magazineluiza.com.br/a-static/420x420/livro-sapiens-uma-nova-historia-da-humanidade-yuval-noah-harari/livrarialeituradompedro/9788535933925/d761af640cce89adb79c95e2973f693c.jpeg',
                year: 2011,
                totalPaginasLidas: '200',
                genreId: 8,
                createdAt: new Date('2025-10-04T22:19:38'),
                updatedAt: new Date('2025-10-04T22:19:38'),
            },
        ],
        skipDuplicates: true,
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
