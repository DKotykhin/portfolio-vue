const icons = import.meta.glob('/src/assets/skills/*', { eager: true, import: 'default' }) as Record<string, string>
const i = (file: string) => icons[`/src/assets/skills/${file}`] ?? ''

export const frontendSkills = [
  { name: 'JavaScript', icon: i('javascript.svg') },
  { name: 'Next.js', icon: i('next-js.svg') },
  { name: 'React', icon: i('react.svg') },
  { name: 'Redux', icon: i('redux.svg') },
  { name: 'Vue.js', icon: i('vue.svg') },
  { name: 'Material UI', icon: i('material-ui.svg') },
  { name: 'Tailwind CSS', icon: i('tailwind.svg') },
  { name: 'SCSS', icon: i('scss.svg') },
]

export const backendSkills = [
  { name: 'Nest.js', icon: i('nest-js.svg') },
  { name: 'Node.js', icon: i('node-js.svg') },
  { name: 'Fastify', icon: i('fastify.svg') },
  { name: 'Apollo', icon: i('apollo.svg') },
  { name: 'GraphQL', icon: i('graphql.svg') },
  { name: 'RabbitMQ', icon: i('rabbitmq.svg') },
  { name: 'gRPC', icon: i('grpc.avif') },
]

export const databaseSkills = [
  { name: 'PostgreSQL', icon: i('postgresql.svg') },
  { name: 'MySQL', icon: i('mysql.svg') },
  { name: 'Redis', icon: i('redis.svg') },
  { name: 'MongoDB', icon: i('mongodb.svg') },
  { name: 'Prisma', icon: i('prisma.svg') },
  { name: 'Drizzle ORM', icon: i('drizzle.avif') },
]

export const otherSkills = [
  { name: 'TypeScript', icon: i('typescript.svg') },
  { name: 'AWS', icon: i('aws.svg') },
  { name: 'Docker', icon: i('docker.svg') },
  { name: 'Git', icon: i('git.svg') },
  { name: 'Figma', icon: i('figma.svg') },
]
