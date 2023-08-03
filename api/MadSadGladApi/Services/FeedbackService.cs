using MadSadGladApi.Data;
using MadSadGladApi.Models;
using System.Linq;

namespace MadSadGladApi.Services
{

    public class FeedbackService : IFeedbackService
    {
        private readonly ApplicationDbContext _dbContext;

        public FeedbackService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Feedback> GetAllFeedbacks()
        {
            return _dbContext.Feedbacks.ToList();
        }

        public Feedback GetFeedbackById(int id)
        {
            return _dbContext.Feedbacks.FirstOrDefault(f => f.Id == id);
        }

        public void AddFeedback(Feedback feedback)
        {
            _dbContext.Feedbacks.Add(feedback);
            _dbContext.SaveChanges();
        }

        public void UpdateFeedback(Feedback feedback)
        {
            var existingFeedback = _dbContext.Feedbacks.FirstOrDefault(f => f.Id == feedback.Id);
            if (existingFeedback != null)
            {
                existingFeedback.Text = feedback.Text;
                existingFeedback.Type = feedback.Type;
                _dbContext.SaveChanges();
            }
        }

        public void DeleteFeedback(int id)
        {
            var feedbackToDelete = _dbContext.Feedbacks.FirstOrDefault(f => f.Id == id);
            if (feedbackToDelete != null)
            {
                _dbContext.Feedbacks.Remove(feedbackToDelete);
                _dbContext.SaveChanges();
            }
        }
    }

}
