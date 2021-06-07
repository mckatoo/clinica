// import {
//   QueryPatientBySlug,
//   QueryPatientBySlugVariables
// } from 'graphql/generated/QueryPatientBySlug'
// import { QueryPatients, QueryPatientsVariables } from 'graphql/generated/QueryPatients'
// import { QueryRecommended } from 'graphql/generated/QueryRecommended'
// import {
//   QueryUpcoming,
//   QueryUpcomingVariables
// } from 'graphql/generated/QueryUpcoming'
// import { QUERY_PATIENT_BY_SLUG, QUERY_PATIENTS } from 'graphql/queries/patients'
// import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
// import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
// import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Patient, { PatientTemplateProps } from 'templates/Patient'
// import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
// import { patientsMapper, highlightMapper } from 'utils/mappers'

// const apolloClient = initializeApollo()

export default function Index (props: PatientTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <Patient {...props} />
}

export async function getStaticPaths () {
  return {
    paths: [{ params: { slug: '29032543890' } }],
    fallback: false
  }
}

export async function getStaticProps () {
  return {
    props: {
      patientInfo: {
        name: 'Milton Carlos Katoo',
        address: 'Rua Dr. Miguel Couto, 81\nVila Boa Esperança\nItapira-SP',
        phone: '(19) 99906 5094',
        photo: '../img/Milton.jpg',
        cpf: '290.325.438-90',
        rg: '30.896.256-4',
        birth_date: '30/12/1976'
      }
    }
  }
}

// gerar em build time (/patient/bla, /bame/foo ...)
// export async function getStaticPaths() {
//   const { data } = await apolloClient.query<QueryPatients, QueryPatientsVariables>({
//     query: QUERY_PATIENTS,
//     variables: { limit: 9 }
//   })

//   const paths = data.patients.map(({ slug }) => ({
//     params: { slug }
//   }))

//   return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // Get patient data
//   const { data } = await apolloClient.query<
//     QueryPatientBySlug,
//     QueryPatientBySlugVariables
//   >({
//     query: QUERY_PATIENT_BY_SLUG,
//     variables: { slug: `${params?.slug}` },
//     fetchPolicy: 'no-cache'
//   })

//   if (!data.patients.length) {
//     return { notFound: true }
//   }

//   const patient = data.patients[0]

//   // get recommended patients
//   const { data: recommended } = await apolloClient.query<QueryRecommended>({
//     query: QUERY_RECOMMENDED
//   })

//   // get upcoming patients and highlight
//   const TODAY = new Date().toISOString().slice(0, 10)
//   const { data: upcoming } = await apolloClient.query<
//     QueryUpcoming,
//     QueryUpcomingVariables
//   >({ query: QUERY_UPCOMING, variables: { date: TODAY } })

//   return {
//     revalidate: 60,
//     props: {
//       slug: params?.slug,
//       cover: `${getImageUrl(patient.cover?.src)}`,
//       patientInfo: {
//         id: patient.id,
//         title: patient.name,
//         price: patient.price,
//         description: patient.short_description
//       },
//       gallery: patient.gallery.map((image) => ({
//         src: `${getImageUrl(image.src)}`,
//         label: image.label
//       })),
//       description: patient.description,
//       details: {
//         developer: patient.developers[0].name,
//         releaseDate: patient.release_date,
//         platforms: patient.platforms.map((platform) => platform.name),
//         publisher: patient.publisher?.name,
//         rating: patient.rating,
//         genres: patient.categories.map((category) => category.name)
//       },
//       upcomingTitle: upcoming.showcase?.upcomingPatients?.title,
//       upcomingPatients: patientsMapper(upcoming.upcomingPatients),
//       upcomingHighlight: highlightMapper(
//         upcoming.showcase?.upcomingPatients?.highlight
//       ),
//       recommendedTitle: recommended.recommended?.section?.title,
//       recommendedPatients: patientsMapper(recommended.recommended?.section?.patients)
//     }
//   }
// }
