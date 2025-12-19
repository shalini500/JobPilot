/* eslint-disable react/prop-types */
const JobCard = ({ job, onApply }) => {
  return (
    <div className="bg-[#161b22] border border-[#1f2937] rounded-xl p-5 hover:bg-[#1b2030] transition cursor-pointer">
      {/* Job Title */}
      <h2 className="text-xl font-semibold mb-1">{job.title}</h2>

      {/* Company & Location */}
      <p className="text-gray-400 text-sm">
        {job.company} • {job.location}
      </p>

      {/* Salary */}
      {job.salary && (
        <p className="text-gray-300 text-sm mt-2">
          💰 <span className="font-medium">{job.salary}</span>
        </p>
      )}

      {/* Job Description Preview */}
      <p className="text-gray-400 text-sm mt-3 line-clamp-2">
        {job.description}
      </p>

      {/* Tags */}
      {job.skills && (
        <div className="flex flex-wrap gap-2 mt-3">
          {job.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs bg-[#1f2937] border border-[#2d3644] px-2 py-1 rounded-lg text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Apply Button */}
      <button
        onClick={() => onApply(job)}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
