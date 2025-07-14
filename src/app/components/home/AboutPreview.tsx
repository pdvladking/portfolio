export default function AboutPreview(){
  return(

<section id="about" className="py-16 px-6 text-center bg-white dark:bg-black">
  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
    The Mind Behind the Motion
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
    I wasn’t born into tech—I built my way here. From late-night debugging to bringing ideas back from the brink, I write code with grit and clarity. The fire isn’t just in the gradients—it’s in the journey.
  </p>
  <div className="mt-6">
    <a
      href="#about"
      className="inline-block px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg font-medium transition duration-300"
    >
      Read More
    </a>
  </div>
</section>
  );
}