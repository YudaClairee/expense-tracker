'use client'

import { useEffect, useState } from "react";
import { getAIInsights } from "@/actions/getAIInsights";
import { generateInsightAnswer } from "@/actions/generateInsightAnswer";
import { Bot, CheckCircle, Info, Lightbulb, TriangleAlert } from "lucide-react";

interface InsightData {
  id: string;
  type: 'warning' | 'info' | 'success' | 'tip';
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

interface AIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}

function AIInsights() {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [aiAnswers, setAiAnswers] = useState<AIAnswer[]>([]);

  async function loadInsights() {
    setIsLoading(true);
    try {
      const newInsights = await getAIInsights();
      setInsights(newInsights);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error loading insights:', error);

      setInsights([
        {
          id: 'fallback-1',
          type: 'info',
          title: 'AI Temporarily Unavailable',
          message:
            "We're working to restore AI insights. Please check back soon.",
          action: 'Try again later',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleActionClick(insight: InsightData) {
    if(!insight.action) return;

    const existingAnswer = aiAnswers.find((a) => a.insightId === insight.id);
    if (existingAnswer) {
      setAiAnswers((prev) => prev.filter((a) => a.insightId !== insight.id));
      return;
    }
    
    setAiAnswers((prev) => [
      ...prev,
      {
        insightId: insight.id,
        answer: '',
        isLoading: true,
      },
    ]);

    try {
      const question = `${insight.title} ${insight.message}`;

      const answer = await generateInsightAnswer(question);

      setAiAnswers((prev) => prev.map((a) => a.insightId === insight.id ? { ...a, answer, isLoading: false } : a));
    } catch (error) {
      console.error('Error generating insight answer:', error);
      setAiAnswers((prev) => prev.map((a) => a.insightId === insight.id ? { ...a, answer: 'Maaf, terjadi kesalahan saat menghasilkan jawaban. Silakan coba lagi.', isLoading: false } : a));
    }
  }
  useEffect(() => {
    loadInsights();
  }, []);

  const getInsightIcon = (type: string) => {
    switch(type) {
      case 'warning':
        return <TriangleAlert className="text-yellow-500" />;
      case 'info':
        return <Info className="text-blue-500" />;
      case 'success':
        return <CheckCircle className="text-green-500" />;
      case 'tip':
        return <Lightbulb className="text-yellow-500" />;
      default:
        return <Bot className="text-blue-500" />;
    }
  }

  const getInsightColor = (type: string) => {
    switch(type) {
      case 'warning':
        return 'bg-yellow-500/50';
      case 'info':
        return 'bg-blue-500/50';
      case 'success':
        return 'bg-green-500/50';
      case 'tip':
        return 'bg-green-500/50';
      default:
        return 'bg-gray-500/50';
    }
  }

  const getButtonColor = (type: string) => {
    switch(type) {
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
        return 'bg-blue-500';
      case 'success':
        return 'bg-green-500';
      case 'tip':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }

  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Loading...';

    const now = new Date();
    const diffMs = now.getTime() - lastUpdated.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    return lastUpdated.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50'>
        <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg'>
            <span className='text-white text-sm sm:text-lg'>🤖</span>
          </div>
          <div className='flex-1'>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100'>
              AI Insights
            </h3>
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-0.5'>
              Analyzing your spending patterns
            </p>
          </div>
          <div className='flex items-center gap-1 sm:gap-2'>
            <div className='w-5 h-5 sm:w-6 sm:h-6 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin'></div>
            <span className='text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium hidden sm:block'>
              Analyzing...
            </span>
          </div>
        </div>

        <div className='space-y-3 sm:space-y-4'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='animate-pulse bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-600'
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-600 rounded-lg'></div>
                <div className='flex-1 space-y-2'>
                  <div className='h-3 bg-gray-200 dark:bg-gray-600 rounded-lg w-3/4'></div>
                  <div className='h-3 bg-gray-200 dark:bg-gray-600 rounded-lg w-full'></div>
                  <div className='h-3 bg-gray-200 dark:bg-gray-600 rounded-lg w-2/3'></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700 text-center'>
          <div className='flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
            <div className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></div>
            <span className='text-xs sm:text-sm'>
              AI is analyzing your financial patterns...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl'>
      <div className='flex items-center justify-between mb-4 sm:mb-6'>
        <div className='flex flex-col'>
            <h3 className='text-xl sm:text-xl font-bold text-gray-900 dark:text-gray-100'>
              Rekomendasi AI
            </h3>
            <p className='text-md text-gray-500 dark:text-gray-400 mt-0.5'>
              AI akan memberikan rekomendasi untuk mengelola keuangan kamu.
            </p>
        </div>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-xs font-medium'>
            <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
            <span className='hidden sm:inline'>{formatLastUpdated()}</span>
            <span className='sm:hidden'>
              {formatLastUpdated().includes('yang lalu')
                ? formatLastUpdated().replace(' yang lalu', '')
                : formatLastUpdated()}
            </span>
          </div>
          <button
            onClick={loadInsights}
            className='w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200'
            disabled={isLoading}
          >
            <span className='text-sm'>🔄</span>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4'>
        {insights.map((insight) => {
          const currentAnswer = aiAnswers.find(
            (a) => a.insightId === insight.id
          );

          return (
            <div
              key={insight.id}
              className={`relative overflow-hidden rounded-xl p-3 sm:p-4 border-l-4 hover:shadow-lg transition-all duration-200 ${getInsightColor(
                insight.type
              )}`}
            >
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 sm:gap-3 mb-2'>
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                        insight.type === 'warning'
                          ? 'bg-yellow-100 dark:bg-yellow-900/50'
                          : insight.type === 'success'
                          ? 'bg-green-100 dark:bg-green-900/50'
                          : insight.type === 'tip'
                          ? 'bg-emerald-100 dark:bg-emerald-900/50'
                          : 'bg-emerald-100 dark:bg-emerald-900/50'
                      }`}
                    >
                      <span className='text-sm sm:text-lg'>
                        {getInsightIcon(insight.type)}
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-bold text-lg mb-0.5'>
                        {insight.title}
                      </h4>
                      {insight.confidence && insight.confidence < 0.8 && (
                        <span className='inline-block px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium'>
                          Pendahuluan
                        </span>
                      )}
                    </div>
                  </div>
                  <p className='text-gray-700 dark:text-gray-300 text-md leading-relaxed mb-3'>
                    {insight.message}
                  </p>
                  {insight.action && (
                    <div className='text-left'>
                      <span
                        onClick={() => handleActionClick(insight)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm cursor-pointer transition-all duration-200 ${getButtonColor(
                          insight.type
                        )} hover:bg-white/50 dark:hover:bg-gray-700/50 ${
                          currentAnswer ? 'bg-white/50 dark:bg-gray-700/50' : ''
                        }`}
                      >
                        <span>{insight.action}</span>
                        {currentAnswer?.isLoading ? (
                          <div className='w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
                        ) : (
                          <span className='text-xs'>
                            {currentAnswer ? '↑' : '→'}
                          </span>
                        )}
                      </span>
                    </div>
                  )}

                  {/* AI Answer Display */}
                  {currentAnswer && (
                    <div className='mt-3 p-3 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-600'>
                      <div className='flex items-start gap-2'>
                        <div className='w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                          <span className='text-white text-xs'>🤖</span>
                        </div>
                        <div className='flex-1'>
                          <h5 className='font-semibold text-gray-900 dark:text-gray-100 text-xs mb-1'>
                            AI Answer:
                          </h5>
                          {currentAnswer.isLoading ? (
                            <div className='space-y-1'>
                              <div className='animate-pulse bg-gray-200 dark:bg-gray-600 h-2 rounded-lg w-full'></div>
                              <div className='animate-pulse bg-gray-200 dark:bg-gray-600 h-2 rounded-lg w-3/4'></div>
                              <div className='animate-pulse bg-gray-200 dark:bg-gray-600 h-2 rounded-lg w-1/2'></div>
                            </div>
                          ) : (
                            <p className='text-lg leading-relaxed'>
                              {currentAnswer.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0'>
          <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
          </div>
          <button
            onClick={loadInsights}
            className='px-3 py-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white rounded-lg font-medium text-xs shadow-lg hover:shadow-xl transition-all duration-200'
          >
            <span className='sm:hidden'>Refresh</span>
            <span className='hidden sm:inline'>Refresh Insights →</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIInsights;


