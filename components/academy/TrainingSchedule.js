export default function TrainingSchedule() {
  const schedule = [
    {
      day: 'Monday',
      sessions: [
        { time: '4:00 PM - 5:30 PM', program: 'Youth Development (Ages 8-12)', location: 'Field 1' },
        { time: '5:30 PM - 7:00 PM', program: 'Elite Training (Ages 13-16)', location: 'Field 2' }
      ]
    },
    {
      day: 'Tuesday',
      sessions: [
        { time: '4:00 PM - 5:30 PM', program: 'Goalkeeper Academy', location: 'Field 3' },
        { time: '5:30 PM - 7:00 PM', program: 'Advanced Skills (Ages 17+)', location: 'Field 1' }
      ]
    },
    {
      day: 'Wednesday',
      sessions: [
        { time: '4:00 PM - 5:30 PM', program: 'Youth Development (Ages 8-12)', location: 'Field 1' },
        { time: '5:30 PM - 7:00 PM', program: 'Team Training Sessions', location: 'Field 2' }
      ]
    },
    {
      day: 'Thursday',
      sessions: [
        { time: '4:00 PM - 5:30 PM', program: 'Speed & Agility Training', location: 'Gym' },
        { time: '5:30 PM - 7:00 PM', program: 'Tactical Sessions', location: 'Classroom' }
      ]
    },
    {
      day: 'Friday',
      sessions: [
        { time: '4:00 PM - 5:30 PM', program: 'Youth Development (Ages 8-12)', location: 'Field 1' },
        { time: '5:30 PM - 7:00 PM', program: 'Match Preparation', location: 'Field 2' }
      ]
    },
    {
      day: 'Saturday',
      sessions: [
        { time: '9:00 AM - 10:30 AM', program: 'Weekend Academy', location: 'Field 1' },
        { time: '2:00 PM - 4:00 PM', program: 'Match Days', location: 'Various Fields' }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Training Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training schedule ensures consistent development 
              and progression for all our academy players.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((daySchedule, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {daySchedule.day}
                </h3>
                <div className="space-y-4">
                  {daySchedule.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="text-sm font-semibold text-blue-600 mb-1">
                        {session.time}
                      </div>
                      <div className="font-medium text-gray-900 mb-1">
                        {session.program}
                      </div>
                      <div className="text-sm text-gray-600">
                        📍 {session.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sunday - Rest Day
              </h3>
              <p className="text-gray-600">
                Recovery and rest are essential parts of our training philosophy. 
                Players are encouraged to focus on recovery and family time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}