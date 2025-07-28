import { FilterType } from '../types/Todo';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function filter ({ filter, onFilterChange }: TodoFilterProps) {
  const filters = ['All', 'Active', 'Completed'] as const;

  return (
    <div className="flex gap-5 mb-6">
      {filters.map((filterType) => (
        <button
          key={filterType}
          onClick={() => onFilterChange(filterType)}
          className={`btn ${filter === filterType ? 'btn-primary' : 'btn-secondary'}`}
        >
          {filterType}
        </button>
      ))}
    </div>
  );
};


