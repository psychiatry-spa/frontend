// LoaderComponent.jsx
const Loading = () => {
  return (
    <div className="loader">
      <div className="loader-inner">
        {[...Array(5)].map((_, index) => (
          <div key={index} className={`loader-line-wrap delay-${index + 1}`}>
            <div className="loader-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
// TODO: Move it in css or tailwind. Its not working in .tsx file
<style>
{`
  .loader {
    @apply fixed inset-0 bg-black z-50;
    background: radial-gradient(circle, #222, #000);
  }

  .loader-inner {
    @apply absolute w-25 h-15 inset-0 m-auto;
  }

  .loader-line-wrap {
    @apply absolute w-25 h-12.5 box-border overflow-hidden;
    top: 0;
    transform-origin: 50% 100%;
    animation: spin 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  }

  .loader-line {
    @apply absolute border-transparent rounded-full box-border;
    border: 4px solid transparent;
    margin: auto;
    top: 0;
  }

  .delay-1 { animation-delay: -50ms; }
  .delay-2 { animation-delay: -100ms; }
  .delay-3 { animation-delay: -150ms; }
  .delay-4 { animation-delay: -200ms; }
  .delay-5 { animation-delay: -250ms; }

  @keyframes spin {
    0%, 15% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }

  .loader-line-wrap:nth-child(1) .loader-line { border-color: hsl(0, 80%, 60%); height: 22.5rem; width: 22.5rem; top: 1.75rem; }
  .loader-line-wrap:nth-child(2) .loader-line { border-color: hsl(60, 80%, 60%); height: 19rem; width: 19rem; top: 3.5rem; }
  .loader-line-wrap:nth-child(3) .loader-line { border-color: hsl(120, 80%, 60%); height: 15.5rem; width: 15.5rem; top: 5.25rem; }
  .loader-line-wrap:nth-child(4) .loader-line { border-color: hsl(180, 80%, 60%); height: 12rem; width: 12rem; top: 7rem; }
  .loader-line-wrap:nth-child(5) .loader-line { border-color: hsl(240, 80%, 60%); height: 8.5rem; width: 8.5rem; top: 8.75rem; }
`}
</style>

export default Loading;
