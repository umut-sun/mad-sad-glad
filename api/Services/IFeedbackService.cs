using MadSadGladApi.Models;

namespace MadSadGladApi.Services
{
    public interface IFeedbackService
    {
        List<Feedback> GetAllFeedbacks();
        Feedback GetFeedbackById(int id);
        void AddFeedback(Feedback feedback);
        void UpdateFeedback(Feedback feedback);
        void DeleteFeedback(int id);
    }
}
