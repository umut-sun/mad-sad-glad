namespace MadSadGladApi.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Type { get; set; } // "mad", "sad" veya "glad"
    }
}
