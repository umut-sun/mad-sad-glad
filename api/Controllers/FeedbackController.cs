namespace MadSadGladApi.Controllers
{
    using MadSadGladApi.Models;
    using MadSadGladApi.Services;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;

    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedbackService _feedbackService;

        public FeedbackController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [HttpGet]
        public IActionResult GetAllFeedbacks()
        {
            var feedbacks = _feedbackService.GetAllFeedbacks();
            return Ok(feedbacks);
        }

        [HttpGet("{id}")]
        public IActionResult GetFeedbackById(int id)
        {
            var feedback = _feedbackService.GetFeedbackById(id);
            if (feedback == null)
                return NotFound();

            return Ok(feedback);
        }

        [HttpPost]
        public IActionResult AddFeedback([FromBody] Feedback feedback)
        {
            if (feedback == null)
                return BadRequest("Invalid feedback data.");

            _feedbackService.AddFeedback(feedback);

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateFeedback(int id, [FromBody] Feedback feedback)
        {
            var existingFeedback = _feedbackService.GetFeedbackById(id);
            if (existingFeedback == null)
                return NotFound();

            existingFeedback.Text = feedback.Text;
            existingFeedback.Type = feedback.Type;

            _feedbackService.UpdateFeedback(existingFeedback);

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFeedback(int id)
        {
            var feedback = _feedbackService.GetFeedbackById(id);
            if (feedback == null)
                return NotFound();

            _feedbackService.DeleteFeedback(id);
            return Ok();
        }
    }

}
